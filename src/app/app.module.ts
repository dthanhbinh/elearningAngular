import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
//Cấu hình Routing
import { Routes,RouterModule } from "@angular/router";
import { LoginComponent } from './Modules/home/login/login.component';
import { RegisterComponent } from './Modules/home/register/register.component';
import { HomePageComponent } from './Modules/home/home-page/home-page.component';
import { HomeModule } from './Modules/home/home.module';
import { UserModule } from './Modules/user/user.module';
//Gọi API
import { HttpClientModule } from "@angular/common/http";
import { CourseService } from './_core/services/course.service';
 const appRoutes:Routes = [
   
   {path:'home',loadChildren:()=>HomeModule},//component:HomePageComponent}},
   {path:'',loadChildren:()=>HomeModule},
   {path:'user',loadChildren:()=>UserModule},
 ]
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    //Router module này sẽ điều cho thẻ <router-outlet> tại app-component
    BrowserModule,RouterModule.forRoot(appRoutes),HttpClientModule
  
  ],
  providers: [CourseService],//là nơi import các service  sử dụng tại module đó
  bootstrap: [AppComponent]
})
export class AppModule { }
