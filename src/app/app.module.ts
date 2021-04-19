import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//Cấu hình Routing
import { Routes,RouterModule } from "@angular/router";
import { LoginComponent } from './Modules/home/login/login.component';
import { RegisterComponent } from './Modules/home/register/register.component';
import { HomePageComponent } from './Modules/home/home-page/home-page.component';
 const appRoutes:Routes = [
   {path:'login',component:LoginComponent},
   {path:'register',component:RegisterComponent},
   {path:'home',component:HomePageComponent},
   {path:'',component:HomePageComponent},
 ]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //Router module này sẽ điều cho thẻ <router-outlet> tại app-component
    BrowserModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
