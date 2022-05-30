import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdminProdutListComponent } from './pages/admin/admin-produt-list/admin-produt-list.component';
import { AdminProdutFormComponent } from './pages/admin/admin-produt-form/admin-produt-form.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

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
    component:AdminLayoutComponent,
    children : [
      {
        path :'',
        redirectTo: 'products',
        pathMatch:'full',
      
      },
      {
        path:'user',
        component: UserComponent
      },
      {
        path:'products',
        children: [
          {
            path:'',
            component:AdminProdutListComponent
            
          },
          {
            path:'create',
            component: AdminProdutFormComponent
            
          },
          {
            path:'edit/:id',
            component: AdminProdutFormComponent
          },
          {
            path:':id',
            component:AdminProdutListComponent
          }
        ]
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
