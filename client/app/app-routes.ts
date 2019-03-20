import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { AdsComponent } from './components/ads/ads.component';
import { ShareYourGardenComponent } from './components/share-your-garden/share-your-garden.component';
import { AdDetailComponent } from './components/ads/ad-detail/ad-detail.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { GardenFormularComponent } from './components/share-your-garden/garden-formular/garden-formular.component';

export const routes: Routes = [
    { path: '', children: [
        { path: 'home', component: HomeComponent },
        { path: 'about', component: AboutComponent },
        { path: 'login', component: LoginComponent },
        { path: 'documentation', component: DocumentationComponent },
        { path: 'ads', component: AdsComponent },
        { path: 'ads/:id', component: AdDetailComponent },
        { path: 'share-your-garden', component: ShareYourGardenComponent },
        { path: 'garden-formular', component: GardenFormularComponent },
        { path: '', redirectTo: 'home', pathMatch: 'full'  },
        { path: '**', component: UnauthorizedComponent },
    ]}
];
