import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProdutFormComponent } from './admin-produt-form.component';

describe('AdminProdutFormComponent', () => {
  let component: AdminProdutFormComponent;
  let fixture: ComponentFixture<AdminProdutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProdutFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProdutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
