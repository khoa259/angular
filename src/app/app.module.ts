import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NameComponent } from './name/name.component';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { HttpClientModule} from "@angular/common/http";
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { ShowValidateComponent } from './components/show-validate/show-validate.component';
import { HomePageComponent } from './pages/client/home-page/home-page.component';
import { DetailProductsComponent } from './pages/client/detail-products/detail-products.component';
import { AboutPageComponent } from './pages/client/about-page/about-page.component';
import { BannerComponent } from './pages/client/banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    FormComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    AdminProductFormComponent,
    AdminProductListComponent,
    AdminProductDetailComponent,
    ShowValidateComponent,
    HomePageComponent,
    DetailProductsComponent,
    AboutPageComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
