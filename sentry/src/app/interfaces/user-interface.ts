export interface UserInterface {
    providerId: string;
    uid: string;
    email: string;
    name?: string | null;
    photoUrl?: string | null;
    firstname?: string | null;
    lastname?: string | null;
    locale?: string | null;
}
