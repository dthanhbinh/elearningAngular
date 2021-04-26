import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //Tạo ra 1 state
  private stateUser=  new BehaviorSubject({taiKhoan:'',matKhau:'',});//Giá trị {} là giá trị mặc định
  //Dối tượng để lấy data từ biến behavior
  dataUser =  this.stateUser.asObservable(); 
  constructor(private http: HttpClient) { }//injection DI
  setUserLogin(newUser){
    //next là phương thức tương tự setState của react
    this.stateUser.next(newUser)
  }
  login(user):Observable<any> {
    let result: Observable<any> = this.http.post(`https://elearning0706.cybersoft.edu.vn/api/quanlynguoidung/dangnhap`,user)
    return result
  }
}
