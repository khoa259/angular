import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assm';
  name = 'khoanh'
  class = 'ph16639'

  teachers = [
    {
      "id": 1,
      "name": "Nguyễn Hữu Khoa",
      "age": 27,
      "gender": 1,
      "avatar": "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
      "status" : 1
    },
    {
      "id": 2,
      "name": "Trịnh Hòa An",
      "age": 20,
      "gender": 0,
      "avatar": "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
      "status" : 0
    },
    {
      "id": 3,
      "name": "Nguyễn Hữu Khoa",
      "age": 30,
      "gender": 1,
      "avatar": "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
      "status" : 1
    }
  ];
  studentName = 'anth khoanh'
  
  studentId = '16639'  
}
