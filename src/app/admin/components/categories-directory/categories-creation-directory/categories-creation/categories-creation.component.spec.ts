import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesCreationComponent } from './categories-creation.component';

describe('CategoriesCreationComponent', () => {
  let component: CategoriesCreationComponent;
  let fixture: ComponentFixture<CategoriesCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
