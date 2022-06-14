import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/type/category';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {
  categories: Category[];
  constructor(
    private categoryService: CategoryService
  ) { 
    this.categories = []
  }

  ngOnInit(): void {
    this.onGetList()
  }
  onGetList(){
    this.categoryService.getCategory().subscribe((data)=> {
      this.categories = data
    })
  }
  onDelete(_id:string|number){
    const alert = confirm('Bạn có chắc muốn xóa không ?');
    if(alert){
      this.categoryService.deleteCategory(_id).subscribe((data) => {
        this.onGetList()
      })
    }

  }
}
