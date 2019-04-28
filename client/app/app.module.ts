// Structural Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

// Added Modules
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AccountComponent } from './components/account/account.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { AboutComponent } from './components/about/about.component';
import { AdsComponent } from './components/ads/ads.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ShareYourGardenComponent } from './components/share-your-garden/share-your-garden.component';
import { AdDetailComponent } from './components/ads/ad-detail/ad-detail.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { RegistrationComponent } from './components/login/registration/registration.component';
import { ForgottenPwdComponent } from './components/login/forgotten-pwd/forgotten-pwd.component';
import { GardenListComponent } from './components/share-your-garden/garden-list/garden-list.component';
import { GardenDetailComponent } from './components/share-your-garden/garden-detail/garden-detail.component';
import { GardenFormularComponent } from './components/share-your-garden/garden-formular/garden-formular.component';
import { GardenComponent } from './components/share-your-garden/garden/garden.component';
import { AdsListComponent } from './components/ads/ads-list/ads-list.component';
import { AdsFormularComponent } from './components/ads/ads-formular/ads-formular.component';
import { AuthenticationComponent } from './components/login/authentication/authentication.component';

// Services
import { AuthenticationService } from './services/auth/authentication.service';
import { CallbackComponent } from './components/callback/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccountComponent,
    AdministrationComponent,
    AboutComponent,
    AdsComponent,
    DocumentationComponent,
    HomeComponent,
    LoginComponent,
    NotificationComponent,
    ShareYourGardenComponent,
    AdDetailComponent,
    UnauthorizedComponent,
    RegistrationComponent,
    ForgottenPwdComponent,
    GardenListComponent,
    GardenDetailComponent,
    GardenFormularComponent,
    GardenComponent,
    AdsListComponent,
    AdsFormularComponent,
    AuthenticationComponent,
    CallbackComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ScrollToModule.forRoot(),
  ],

  providers: [
    AuthenticationService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
