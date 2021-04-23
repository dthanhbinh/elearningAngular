import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './home-template/header/header.component';
import { HomeTemplateComponent } from './home-template/home-template.component';
import { RouterModule } from '@angular/router';
//Cấu hình route cho Homemodule

const HomeRoute = [
  {path:'',component:HomeTemplateComponent,children:[
    {path:'homepage',component:HomePageComponent},
    {path:'',component:HomePageComponent}
  ]}
]


@NgModule({
  declarations: [
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    HomeTemplateComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(HomeRoute)
  ],
  exports:[HeaderComponent]
})
export class HomeModule { }
