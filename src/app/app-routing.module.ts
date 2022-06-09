import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
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
        path:'products',
        children: [
          {
            path:'',
            component:AdminProductListComponent
          },
          {
            path:'create',
            component: AdminProductFormComponent
          },
          {
            path:'edit/:_id',
            component: AdminProductFormComponent
          },
          {
            path:':_id',
            component:AdminProductDetailComponent
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
