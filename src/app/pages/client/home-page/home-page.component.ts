import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/type/product';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  products: Product[];
  constructor(private productServive: ProductService){
    this.products = [];
  }
  ngOnInit(): void {
    this.onGetList()
  }
  onGetList() {
    this.productServive.getProducts().subscribe((data) => {
      this.products = data
    })
  }
}
