import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesPaginationComponent } from './categories-pagination.component';

describe('CategoriesPaginationComponent', () => {
  let component: CategoriesPaginationComponent;
  let fixture: ComponentFixture<CategoriesPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
