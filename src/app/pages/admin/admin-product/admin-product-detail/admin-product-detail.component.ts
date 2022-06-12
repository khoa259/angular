import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/type/product';
@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ProductService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.product = {
      _id: '',
      name: '',
      price: 0,
      img : '',
      desc: '',
      salePrice: ''
    };
  }

  ngOnInit(): void {
    // ActivateRoute sẽ có thể đọc biến được truyền vào trên url
    // tên id được định nghĩa ở app-routing :_id
    const idFromUrl = this.activateRoute.snapshot.params['_id'];

    this.productService.getProduct(idFromUrl).subscribe(data => {
      this.product = data;
    })
  }

  redirectTolist() {
    this.router.navigateByUrl('/admin/books')
  }
  onDelete(_id: string | number ) {
    // confirm
    const confirmDelete = confirm('Bạn có chắc chắn xoá không?');
    // kiểm tra dữ liệu => xoá
    if (confirmDelete && _id) {
      this.productService.deleteProduct(_id).subscribe((data) => {
        // Cập nhật lại danh sách
        this.redirectTolist();
      })
    }

  }
}
