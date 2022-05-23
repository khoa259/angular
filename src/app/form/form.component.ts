import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  users= [
    {
      id: 1,
      name:'khoanh',
      age: 20,
      email:'khoanhph16639@gmail.com'
    },
    {
      id: 10,
      name:'khoanh10',
      age: 20,
      email:'khoanhph16639@gmail.com'
    },
    {
      id: 11,
      name:'khoanh11',
      age: 20,
      email:'khoanhph16639@gmail.com'
    }
  ]

  inputValues = {
    id: 0,
    name: '',
    age: 0,
    email: ''
  };

  onSubmit(userForm : NgForm){
      console.log(userForm);
      // 1. tìm ra id lớn nhât
      const UserIdS = this.users.map(user => user.id).sort((a,b) => a-b)
      console.log(UserIdS);
      const newId = UserIdS[UserIdS.length-1];
      //2 thêm vào mảng
      this.users.push({
        ...userForm.value,
        id :newId + 1
      });
      //3 cập nhật dữ liệu về ban đầu
     userForm.resetForm({
       name: '',
       age: 0,
       email: ''
     })
  };

  onDelete(userId:number){
    const confirm = window.confirm (" ban có muốn xoas ")
    if( confirm){
      this.users = this.users.filter((user) =>user.id !== userId)
    }
  };

  onEdit(userId:number){
    //1. tìm ra user có id là userId truyền vào
    const editUser =  this.users.find((user) => user.id === userId);
    console.log(editUser);
    
    //2 nếu tìm ra mới gán giá trị lên form
    if(editUser){
      
    }
  }
}
