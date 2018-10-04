import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  NavbarComponent,
  HomeComponent,
  LoginComponent,
  RegisterComponent,
  NotfoundComponent,
  Send404Component,
  FooterComponent,
  AdminComponent} from './components';
import { AuthGuard } from './guards';
import { AlertService, AuthenticationService, UserService } from './services';
import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { AlertComponent } from './directives';
import { HomeElementComponent } from './elements';
import { SafePipe } from './pipes';
import { MaterialModule } from './modules';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    Send404Component,
    NotfoundComponent,
    HomeElementComponent,
    SafePipe,
    FooterComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    HomeElementComponent
  ]
})
export class AppModule { }
