import { Injectable, OnInit } from '@angular/core';

import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable, of, switchMap } from 'rxjs';
import { Router } from '@angular/router';

import { UserInterface } from 'src/app/interfaces/user-interface';

@Injectable({
    providedIn: 'root',
})
export class AuthService implements OnInit {
    constructor(
        private readonly router: Router,
        private readonly angularFireAuth: AngularFireAuth,
        private readonly angularFireStore: AngularFirestore
    ) {
        this.initFirebaseAuthState();
    }

    ngOnInit(): void {}

    private initFirebaseAuthState(): void {
        this._user$ = this.angularFireAuth.authState.pipe(
            // tap((authUser) => console.log),
            switchMap((user) => {
                if (user) {
                    return this.angularFireStore
                        .doc<UserInterface>(`users/${user.uid}`)
                        .valueChanges();
                } else {
                    return of(null);
                }
            })
        );
    }

    private _user$!: Observable<any>;

    private async googleSignIn() {
        const provider = new firebase.auth.GoogleAuthProvider();
        const credential = await this.angularFireAuth.signInWithPopup(provider);

        console.log(JSON.stringify(credential.additionalUserInfo));

        return this.updateUserDataWithGoogleData(
            credential.user,
            credential.additionalUserInfo
        );
    }

    private async googleSignOut() {
        await this.angularFireAuth.signOut();
    }

    private updateUserDataWithGoogleData(
        user: firebase.User | null,
        additionalUserInfo: any | null
    ) {
        const userReference = this.angularFireStore.doc<UserInterface>(
            `users/${user?.uid}`
        );

        const userData: UserInterface = {
            providerId: additionalUserInfo?.providerId,
            uid: user!.uid,
            email: user!.email!,
            name: user!.displayName || '',
            photoUrl: user!.photoURL,
            firstname: additionalUserInfo?.profile?.given_name,
            lastname: additionalUserInfo?.profile.family_name,
            locale: additionalUserInfo?.profile.locale,
        };

        return userReference.set(userData, { merge: true });
    }

    public async signIn() {
        await this.googleSignIn();
        return this.router.navigate(['app/home']);
    }

    public async signOut() {
        await this.googleSignOut();
        return this.router.navigate(['']);
    }

    // getters and setters
    public get user$(): Observable<UserInterface> {
        return this._user$;
    }

    public set user$(user$: Observable<UserInterface>) {
        this._user$ = user$;
    }
    // getters and setters
}
