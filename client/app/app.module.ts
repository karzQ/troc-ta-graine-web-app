import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './/app-routing.module';

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
import { GardenAdsComponent } from './components/share-your-garden/garden-ads/garden-ads.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgottenPwdComponent } from './components/forgotten-pwd/forgotten-pwd.component';

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
    GardenAdsComponent,
    UnauthorizedComponent,
    RegistrationComponent,
    ForgottenPwdComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  providers: [
    
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
