import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/type/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Product[]
  constructor(  private productService: ProductService  ) { 
      this.products = [];
    }

  ngOnInit(): void {
    this.onGetList()
  }

  onGetList() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data
    })
  }
}
