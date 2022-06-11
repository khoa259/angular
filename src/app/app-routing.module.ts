import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { DetailProductsComponent } from './pages/client/detail-products/detail-products.component';
import { AboutPageComponent } from './pages/client/about-page/about-page.component';
import { HomePageComponent } from './pages/client/home-page/home-page.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    // pathMatch:'full',
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'products',
        children: [
          {
            path :':_id',
            component: DetailProductsComponent
          }
        ]
      },
      {
        path: 'about',
        component: AboutPageComponent
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
