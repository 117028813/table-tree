// buildin module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

// custom module
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';

// component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// service
import { LoginService } from './services/login.service';
import { LoginGuardService } from './services/login-guard.service';
import { GridDataService } from './services/grid-data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [
    LoginService,
    LoginGuardService,
    GridDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
