import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  formValues = {
    id : 0,
    name: '',
    age: 0,
    email: ''
  };

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
  ];

  onParentSubmit(formData: any ){
    const UserIdS = this.users.map(user => user.id).sort((a,b) => a-b)
      console.log(UserIdS);
      const newId = UserIdS[UserIdS.length-1];

    if( this.formValues.id == 0 ){
      this.users.push({
        ...formData,
        id:newId+1
        
      });
      console.log('Parent FormData', formData);
    }else{
      const idx = this.users.findIndex((user) => user.id === this.formValues.id);
      if (idx > -1) {
        this.users[idx] = {
          ...formData,
          id: this.formValues.id
        };
      }
    }
    
  };

  onParentDelete (userId:number) {
    const alert = window.confirm("bạn có muốn xóa không")
    if(alert){
      this.users = this.users.filter(user => user.id !== userId) 
    }
  };

  onParentEdit(userId: number) {
    // 1. Tìm xem đâu là user được chỉnh sửa
    const editUser = this.users.find(user => user.id === userId);

    if (editUser) {
      return this.formValues = {...editUser};
    }
    return alert('Không tìm thấy user đó!');
  };

}
