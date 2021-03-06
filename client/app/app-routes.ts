import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { AdsComponent } from './components/ads/ads.component';
import { ShareYourGardenComponent } from './components/share-your-garden/share-your-garden.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { GardenFormularComponent } from './components/share-your-garden/garden-formular/garden-formular.component';
import { GardenListComponent } from './components/share-your-garden/garden-list/garden-list.component';
import { GardenDetailComponent } from './components/share-your-garden/garden-detail/garden-detail.component';
import { AdsListComponent } from './components/ads/ads-list/ads-list.component';
import { AdsFormularComponent } from './components/ads/ads-formular/ads-formular.component';
import { RegistrationComponent } from './components/login/registration/registration.component';
import { AuthenticationComponent } from './components/login/authentication/authentication.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AccountComponent } from './components/account/account.component';

export const routes: Routes = [
    { path: '', children: [
        { path: '', redirectTo: 'home', pathMatch: 'full'  },
        { path: 'home', component: HomeComponent },
        { path: 'about', component: AboutComponent },
        { path: 'account', component: AccountComponent },
        { path: 'login', component: LoginComponent, children: [
            { path: '', redirectTo: 'auth', pathMatch: 'full'},
            { path: 'auth', component: AuthenticationComponent },
            { path: 'register', component: RegistrationComponent},
        ]},

        { path: 'documentation', component: DocumentationComponent },
        { path: 'ads', component: AdsComponent, children: [
            { path: '', redirectTo: 'list', pathMatch: 'full'},
            { path: 'list', component: AdsListComponent },
            // { path: 'formular', component: AdsFormularComponent, canActivate: [AuthenticationGuard] },
            { path: 'formular', component: AdsFormularComponent },
        ]},

        // { path: 'garden', component: ShareYourGardenComponent, canActivate: [AuthenticationGuard], children: [
        { path: 'garden', component: ShareYourGardenComponent, children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: GardenListComponent},
            { path: 'formular', component: GardenFormularComponent },
            { path: 'list/detail/:id', component: GardenDetailComponent},
        ]},
        { path: '**', component: UnauthorizedComponent },
    ]}
];
