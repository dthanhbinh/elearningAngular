import { Component, OnInit } from '@angular/core';
import { CourseViewModel } from 'src/app/_core/models/CourseViewModel';
import { CourseService } from 'src/app/_core/services/course.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  course: CourseViewModel[] = [];
  constructor(private courseService:CourseService) {
    
  } 

  ngOnInit(): void {
    // let observableCourses = this.courseService.layDanhSachKhoaHoc();

    // observableCourses.subscribe((result)=>{
    //   this.course = result;
    // },(errors)=>{
    //   console.log(errors.error);
      
    // })
    this.layDanhSachKhoaHoc()
  }

  layDanhSachKhoaHoc= async () => {
    try {
      let result = await this.courseService.layDanhSachKhoaHoc().pipe().toPromise();
      this.course = result;
    } catch (err) {
      console.log(err.error);
      
    }
  }
}
