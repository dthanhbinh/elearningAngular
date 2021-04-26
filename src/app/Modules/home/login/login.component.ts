import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }//router là đối tượng dùng để chuyển hướng trang sau khi xủ lý

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
      localStorage.setItem('userLogin',JSON.stringify(result));
      localStorage.setItem('accessToken',result.accessToken);
      //Chuyển hướng về trang chủ
      alert('Đăng nhập thành công')
      this.router.navigate(['/'])
      //Cập nhật service userLoginBehavior
      this.userService.setUserLogin(result)
    },err=>{
      alert(err.message)
      console.log(err);
      
    })
  }

}
