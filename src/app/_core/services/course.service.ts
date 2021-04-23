import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { //Cơ chế Dependency injection (DI)

  }

  layDanhSachKhoaHoc():Observable<any>{
    let result: Observable<any> =this.http.get(`https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01`)
    return result
  }
}
