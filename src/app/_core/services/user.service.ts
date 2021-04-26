import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  login(user):Observable<any> {
    let result: Observable<any> = this.http.post(`https://elearning0706.cybersoft.edu.vn/api/quanlynguoidung/dangnhap`,user)
    return result
  }
}
