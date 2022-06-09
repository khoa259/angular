import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  productId: string

  constructor(
    private productService: ProductService, // các phương thức call API
    private router: Router, // điều hướng
    private activateRoute: ActivatedRoute
  ) {
    this.productForm = new FormGroup({
      // name: new FormControl('', Validators.required), // FormControl(giá trị mặc định)
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
      ]), // FormControl(giá trị mặc định)
      // price: new FormControl(0)
    });
    this.productId='';
  }
  
  ngOnInit(): void {
    this.productId= this.activateRoute.snapshot.params['_id']

    if(this.productId){
      this.productService.getProduct(this.productId).subscribe(data => {
        this.productForm.patchValue({
          name:data.name
        });
      })
    }
  }
  redirectTolist() {
    this.router.navigateByUrl('/admin/products')
  }
  onSubmit() {
    console.log(this.productForm.value);
    // 1. nhận dữ liệu từ form => this.productForm.value
    const data = this.productForm.value;

    if(this.productId !== '' && this.productId !== undefined){
      return this.productService.updateProduct(this.productId, data).subscribe(data => {
        this.redirectTolist()
      })
    }
    return this.productService.createProduct(data).subscribe((data) => {
      this.redirectTolist()
      console.log(data);
    })
  }  

}
