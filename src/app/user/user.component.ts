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

  onParentSubmit(formData: NgForm ){
    const UserIdS = this.users.map(user => user.id).sort((a,b) => a-b)
      console.log(UserIdS);
      const newId = UserIdS[UserIdS.length-1];
    this.users.push({
      ...formData.value,
      id :newId + 1
    });
    console.log('Parent FormData', formData);
    
  }

}
