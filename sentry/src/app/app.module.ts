import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
/*
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {
    provideAnalytics,
    getAnalytics,
    ScreenTrackingService,
    UserTrackingService,
} from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
*/

import { MatDatepickerModule } from '@angular/material/datepicker';
import {
    DateAdapter,
    MAT_DATE_FORMATS,
    MAT_DATE_LOCALE,
} from '@angular/material/core';
import {
    MatLuxonDateModule,
    LuxonDateAdapter,
    MAT_LUXON_DATE_ADAPTER_OPTIONS,
} from '@angular/material-luxon-adapter';
import { NgClickOutsideDirective } from 'ng-click-outside2';

import { NgChartsModule } from 'ng2-charts';

import { environment } from 'src/environments/environment';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';

import { SentryDateModule } from './utils/sentry-date-module';

import { ThemeSwitcherComponent } from 'src/app/components/elements/theme-switcher/theme-switcher.component';
import { HeaderLogoComponent } from 'src/app/components/elements/header-logo/header-logo.component';
import { DropdownMenuComponent } from './components/elements/dropdown-menu/dropdown-menu.component';
import { DropdownMenuItemComponent } from './components/elements/dropdown-menu/dropdown-menu-item.component';
import { NotificationComponent } from './components/elements/notification/notification.component';
import { NotificationItemComponent } from './components/elements/notification/notification-item.component';

import { EventsFeedComponent } from './components/elements/events-feed/events-feed.component';
import { EventFeedItemComponent } from './components/elements/events-feed/event-feed-item.component';

import { SidebarItemComponent } from 'src/app/components/elements/sidebar-item/sidebar-item.component';
import { SidebarMenuComponent } from 'src/app/components/elements/sidebar-menu/sidebar-menu.component';
import { SidebarMenuItemComponent } from 'src/app/components/elements/sidebar-menu/sidebar-menu-item.component';

import { HeaderComponent } from 'src/app/components/layouts/header/header.component';
import { SidebarComponent } from 'src/app/components/layouts/sidebar/sidebar.component';

import { AuthComponent } from 'src/app/components/routes/auth/auth.component';
import { ErrorComponent } from 'src/app/components/routes/error/error.component';
import { SentryComponent } from 'src/app/components/routes/sentry/sentry.component';

import { HomeComponent } from 'src/app/components/routes/app-sentry/home/home.component';
import { DashboardComponent } from 'src/app/components/routes/app-sentry/dashboard/dashboard.component';
import { MembersComponent } from 'src/app/components/routes/app-sentry/members/members.component';
import { TimestampCardComponent } from './components/elements/timestamp-card/timestamp-card.component';
import { StatCardComponent } from './components/elements/stat-card/stat-card.component';
import { StatPillComponent } from './components/elements/stat-pill/stat-pill.component';
import { ChartLegendItemComponent } from './components/elements/chart-legend-item/chart-legend-item.component';
import { MemberListItemComponent } from './components/elements/member-list-item/member-list-item.component';
import { ButtonRadioGroupComponent } from './components/elements/button-radio-group/button-radio-group.component';
import { SelectComponent } from './components/elements/select/select.component';
import { SelectItemComponent } from './components/elements/select/select-item.component';

@NgModule({
    declarations: [
        AppComponent,

        ThemeSwitcherComponent,
        HeaderLogoComponent,
        DropdownMenuComponent,
        DropdownMenuItemComponent,
        NotificationComponent,
        NotificationItemComponent,
        EventsFeedComponent,
        EventFeedItemComponent,
        SidebarItemComponent,
        SidebarMenuComponent,
        SidebarMenuItemComponent,

        HeaderComponent,
        SidebarComponent,

        AuthComponent,
        ErrorComponent,
        SentryComponent,

        HomeComponent,
        DashboardComponent,
        MembersComponent,
        TimestampCardComponent,
        StatCardComponent,
        StatPillComponent,
        ChartLegendItemComponent,
        MemberListItemComponent,
        ButtonRadioGroupComponent,
        SelectComponent,
        SelectItemComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,

        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,
        AngularFireDatabaseModule,

        // provideFirebaseApp(() => initializeApp(environment.firebase)),
        // provideAnalytics(() => getAnalytics()),
        // provideAuth(() => getAuth()),
        // provideFirestore(() => getFirestore()),

        MatDatepickerModule,
        MatLuxonDateModule,

        NgClickOutsideDirective,
        NgChartsModule,

        AppRoutingModule,
    ],
    providers: [
        // set date locale
        { provide: MAT_DATE_LOCALE, useValue: SentryDateModule.LOCALE },

        // set date adapter
        {
            provide: DateAdapter,
            useClass: LuxonDateAdapter,
            deps: [MAT_DATE_LOCALE, MAT_LUXON_DATE_ADAPTER_OPTIONS],
        },

        // set date formats
        { provide: MAT_DATE_FORMATS, useValue: SentryDateModule.DATE_FORMATS },
    ],
    // providers: [ScreenTrackingService, UserTrackingService],
    bootstrap: [AppComponent],
})
export class AppModule {}
