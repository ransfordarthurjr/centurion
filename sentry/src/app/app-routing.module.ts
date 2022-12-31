import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/components/guards/auth.guard';

import { AuthComponent } from 'src/app/components/routes/auth/auth.component';
import { SentryComponent } from 'src/app/components/routes/sentry/sentry.component';
import { ErrorComponent } from 'src/app/components/routes/error/error.component';

import { HomeComponent } from 'src/app/components/routes/app-sentry/home/home.component';
import { DashboardComponent } from 'src/app/components/routes/app-sentry/dashboard/dashboard.component';
import { MembersComponent } from 'src/app/components/routes/app-sentry/members/members.component';

const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
    },
    {
        path: 'auth',
        component: AuthComponent,
    },
    {
        path: 'login',
        redirectTo: 'auth',
    },
    {
        path: 'app',
        component: SentryComponent,

        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: HomeComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'home',
                component: HomeComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'dashboard',
                component: DashboardComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'members',
                component: MembersComponent,
                canActivate: [AuthGuard],
            },
            {
                path: '**',
                component: HomeComponent,
            },
        ],
    },
    {
        path: 'error',
        component: ErrorComponent,
    },
    {
        path: '**',
        component: AuthComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
