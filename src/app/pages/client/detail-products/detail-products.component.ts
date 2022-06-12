import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/type/product';

@Component({
  selector: 'app-detail-products',
  templateUrl: './detail-products.component.html',
  styleUrls: ['./detail-products.component.css']
})
export class DetailProductsComponent implements OnInit {
  product: Product;
  constructor(
    private ProductService: ProductService,
    private activateRoute: ActivatedRoute
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
    const idFromUrl = this.activateRoute.snapshot.params['_id'];
    this.ProductService.getProduct(idFromUrl).subscribe(data => {
      this.product = data;
    })
  }

}
