import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { CourseViewModel } from 'src/app/_core/models/CourseViewModel';
import { CourseService } from 'src/app/_core/services/course.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id:string = '';
  khoaHoc:CourseViewModel = new CourseViewModel
  //Dối tượng atcRoute dùng để lấy tham số trên url xuống
  constructor(private atvRoute:ActivatedRoute,private courseService:CourseService) { }

  ngOnInit(): void {
    // this.atvRoute.params.subscribe(params =>{
    //   this.id=params.id
    //   //lấy giá trị tham số sau đó dùng tam số gọi api
    //   this.courseService.layChiTietKhoaHoc(this.id).subscribe((result)=>{
    //     console.log(('result'),result);
    //     this.khoaHoc = result
    //   },err =>{
    //     console.log(err);
    //   })
    // });
    this.layChiTietKhoaHoc();
  }

    layChiTietKhoaHoc = async () =>{
      try {
      //Lấy tham số từ url
      const params:any = await this.atvRoute.params.pipe();
      //Gọi service
      const result:any = await this.courseService.layChiTietKhoaHoc(params.value.id).pipe().toPromise();
      this.khoaHoc = result;
      }catch(err){
        console.log('errors', err.error);
      }
  }
}
