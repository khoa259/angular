import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ProductCreate } from '../type/product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // http sẽ cung cấp các phương thức để tương tác với API
  constructor(private http: HttpClient) { }

  // Observable sẽ cung cấp kiểu xử lý bất đồng bộ để phía component lắng nghe dữ liệu
  getProducts(): Observable<Product[]>  {
    return this.http.get<Product[]>(environment.products);
  }
  getProduct (_id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.products}/${_id}`);
  }
  createProduct (data: ProductCreate): Observable<Product> {
    return this.http.post<Product>(`${environment.products}`, data);
  }
  deleteProduct (_id: number|string): Observable<any> {
    return this.http.delete(`${environment.products}/${_id}`);
  }
  updateProduct(_id:string, data: ProductCreate): Observable<Product>{
    return this.http.put<Product>(`${environment.products}/${_id}`, data)
  }
}
