import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    // pathMatch:'full',
    children: [
      {
        path: '',
        component: HomeComponent

      },
      {
        path: 'user',
        component: UserComponent
      
      }
    ]
  },
  {
    path: 'admin',
    component:AdminComponent,
    children : [
      {
        path :'',
        redirectTo: 'user',
        pathMatch:'full',
      
      },
      {
        path:'user',
        component: UserComponent
      }
    ]
    
    
  }
  // redirectTo: 'user',
  // pathMatch: 'full',
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
