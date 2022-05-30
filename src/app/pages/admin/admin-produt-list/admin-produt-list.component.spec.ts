import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProdutListComponent } from './admin-produt-list.component';

describe('AdminProdutListComponent', () => {
  let component: AdminProdutListComponent;
  let fixture: ComponentFixture<AdminProdutListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProdutListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProdutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
