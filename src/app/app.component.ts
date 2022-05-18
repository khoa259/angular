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
      "age": 31,
      "gender": 1,
      "avatar": "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
      "status" : 1
    }
  ];

  inputValues = {
    name: '', // đang có ở input
    age: '', // đang có ở input nhưng là chuỗi
    avatar: '',
    gender: '1'
  };

  onInput(event:any, key: 'name'|'age'|'avatar'|'gender'){
    this.inputValues[key] = event.target.value;
  }
  onSubmit() {
    // Thêm dữ liệu vừa thao tác ở form vào mảng teachers
    this.teachers.push({
      ...this.inputValues,
      age: +this.inputValues.age, //đưa age từ chuỗi input về số
      // bổ sung các thuộc tính còn đang thiếu
      gender: +this.inputValues.gender,
      status: 0,
      id: this.teachers.length + 1
    });
    // Cập nhật lại giá trị cho input ở form:
    // [value]="this.inputValues.name"
    this.inputValues = {
      name: '',
      age: '',
      avatar: '',
      gender: '0'
    };
  }



  studentName = 'anth khoanh'
  
  studentId = '16639'  
}
