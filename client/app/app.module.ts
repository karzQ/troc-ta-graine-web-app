// Structural Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Added Modules
import { AppRoutingModule } from './app-routing.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { DeviceDetectorModule } from 'ngx-device-detector';

// Components
import { AppComponent } from './app.component';
import { AccountComponent } from './components/account/account.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { AboutComponent } from './components/about/about.component';
import { AdsComponent } from './components/ads/ads.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ShareYourGardenComponent } from './components/share-your-garden/share-your-garden.component';
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
import { CallbackComponent } from './components/callback/callback.component';

// Services
import { AuthenticationService } from './services/auth/authentication.service';
import { UserService } from './services/data/user/user.service';
import { TrocComponent } from './components/home/troc/troc.component';
import { SocialMediaComponent } from './components/home/social-media/social-media.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/ads/ads-list/list/list.component';
import { DetailComponent } from './components/ads/ads-list/detail/detail.component';
import { FormularComponent } from './components/ads/ads-formular/formular/formular.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AdministrationComponent,
    AboutComponent,
    AdsComponent,
    DocumentationComponent,
    HomeComponent,
    LoginComponent,
    NotificationComponent,
    ShareYourGardenComponent,
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
    TrocComponent,
    SocialMediaComponent,
    HeaderComponent,
    ListComponent,
    DetailComponent,
    FormularComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DeviceDetectorModule.forRoot(),
    NgbTooltipModule,
    NgbModule.forRoot(),
    ScrollToModule.forRoot(),
  ],

  exports: [
  ],

  providers: [
    AuthenticationService,
    UserService,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
