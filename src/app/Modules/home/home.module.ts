import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './home-template/header/header.component';
import { HomeTemplateComponent } from './home-template/home-template.component';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
//lấy dữ liệu input từ người dùng => impor @angular/form
import {FormsModule} from '@angular/forms';
//Cấu hình route cho Homemodule

const HomeRoute = [
  {path:'',component:HomeTemplateComponent,children:[
    {path:'homepage',component:HomePageComponent},
    {path:'',component:HomePageComponent},
    {path:'detail/:id',component:DetailComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent}
  ]}
]


@NgModule({
  declarations: [
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    HomeTemplateComponent,
    HeaderComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(HomeRoute),FormsModule
  ],
  exports:[HeaderComponent]
})
export class HomeModule { }
