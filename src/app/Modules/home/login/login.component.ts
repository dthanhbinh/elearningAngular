import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/_core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  dangNhap(formLogin:NgForm){
    console.log(formLogin);
    // for(let key in formLogin){
    //   if(formLogin[key].trim() === ''){
    //     alert('dữ liệu không hợp lệ')
    //     return
    //   }
    // }
    this.userService.login(formLogin).subscribe((result) =>{
      console.log(result);
      
    },err=>{
      console.log(err);
      
    })
  }

}
