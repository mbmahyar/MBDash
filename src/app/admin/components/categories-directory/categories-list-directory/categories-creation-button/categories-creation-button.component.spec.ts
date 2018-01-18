import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesCreationButtonComponent } from './categories-creation-button.component';

describe('CategoriesCreationButtonComponent', () => {
  let component: CategoriesCreationButtonComponent;
  let fixture: ComponentFixture<CategoriesCreationButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesCreationButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesCreationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
