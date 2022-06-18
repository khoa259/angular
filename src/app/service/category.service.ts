import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category, CategoryCreate } from '../type/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor( private http: HttpClient) { }

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.categories)
  }
  getCategories(_id:string|number) :Observable<Category>{
    return this.http.get<Category>(`${environment.categories}/${_id}`)
  }
  createCategory(data: CategoryCreate):Observable<Category>{
    return this.http.post<Category>(`${environment.categories}`,data)
  }
  deleteCategory(_id:string|number):Observable<any>{
    return this.http.delete(`${environment.categories}/${_id}`);
  }
  updateCategory(_id:string | number, data: CategoryCreate): Observable<Category>{
    return this.http.put<Category>(`${environment.categories}/${_id}`, data)
  }
}

