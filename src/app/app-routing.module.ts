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
import { CartComponent } from './pages/client/cart/cart.component';
import { ListProductComponent } from './pages/client/list-product/list-product.component';
import { ContactFormComponent } from './pages/client/contact-form/contact-form.component';
import { SignInComponent } from './pages/client/auth/sign-in/sign-in.component';
import { SignUpComponent } from './pages/client/auth/sign-up/sign-up.component';
import { Error404Component } from './pages/error404/error404.component';
import { AdminCategoryFormComponent } from './pages/admin/admin-category/admin-category-form/admin-category-form.component';
import { AdminCategoryListComponent } from './pages/admin/admin-category/admin-category-list/admin-category-list.component';
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
            component: DetailProductsComponent,
          }
        ]
      },
      {
        path:'category',
        component: ListProductComponent,
      },
      {
        path: 'contact',
        component: ContactFormComponent ,
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'about',
        component: AboutPageComponent
      },
      {
        path :'signin',
        component: SignInComponent
      },
      {
        path :'signup',
        component: SignUpComponent
      },
    ]
  },
  {
    path: 'admin',
    component:AdminLayoutComponent,
    children : [
      {
        path:'books',
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
      },
      {
        path:'category',
        component: AdminCategoryListComponent,
        children: [
          {
            path: 'create',
            component: AdminCategoryFormComponent
          },
          {
            path: 'edit/:_id',
            component: AdminCategoryFormComponent
          },
         
        ]
      },

    ]
  },
  
  {
    path : '404',
    component: Error404Component,
  },
  {
    path: '**',
    redirectTo: '404'
  }


  // redirectTo: 'user',
  // pathMatch: 'full',
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
