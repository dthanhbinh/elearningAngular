import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userLogin: any ={taiKhoan:'',matKhau:''}
  constructor(private userService: UserService) { }

  async ngOnInit() {
    //Lấy giá trị từ service về component
    //Cách 1 lấy băng async await
    const result:any = await this.userService.dataUser.pipe();
    this.userLogin = result.source.value;
    console.log(this.userLogin);
    
  }
  // ngOnInit(): void {
  //   //Lấy giá trị từ service về component
  //   //Cách 2 lấy băng subcribe
  //   this.userService.dataUser.subcribe(result =>{
  //     console.log(result);
  //   },err =>{
  //     console.log(err);
  //   });
    
  }


