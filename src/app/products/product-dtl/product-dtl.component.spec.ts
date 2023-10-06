import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDtlComponent } from './product-dtl.component';

describe('ProductDtlComponent', () => {
  let component: ProductDtlComponent;
  let fixture: ComponentFixture<ProductDtlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDtlComponent]
    });
    fixture = TestBed.createComponent(ProductDtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
