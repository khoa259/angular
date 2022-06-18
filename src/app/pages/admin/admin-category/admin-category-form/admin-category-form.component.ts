import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-admin-category-form',
  templateUrl: './admin-category-form.component.html',
  styleUrls: ['./admin-category-form.component.css']
})
export class AdminCategoryFormComponent implements OnInit {
  CategoryForm: FormGroup;
  CategoryId: string
  
  constructor(
    private CategoryService: CategoryService,
    private router : Router,
    private activeRoute: ActivatedRoute
  ) {
    this.CategoryForm =  new FormGroup({
      name: new FormControl('' ,[
        Validators.required,
        Validators.minLength(3)
      ]),
    });
    this.CategoryId = '';
   }

  ngOnInit(): void {
    this.CategoryId = this.activeRoute.snapshot.params['_id']
    if(this.CategoryId){
      this.CategoryService.getCategories(this.CategoryId).subscribe(data => {
        this.CategoryForm.patchValue({
          name:data.name
        });
        console.log(data.name);
        
      })
    }
  }
  redirectTolist(){
    this.router.navigateByUrl('/admin/category')
  }
  onSubmit(){
    console.log(this.CategoryForm.value);
    
    const data = this.CategoryForm.value;

    if(this.CategoryId !== '' && this.CategoryId !== undefined){
      return this.CategoryService.updateCategory(this.CategoryId , data).subscribe(data => {
        this.redirectTolist()
      })
    }

    return this.CategoryService.createCategory(data).subscribe((data) => {
      this.redirectTolist()
    })
  }

}
