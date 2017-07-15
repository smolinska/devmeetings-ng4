import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotedProductsListComponent } from './promoted-products-list.component';

describe('PromotedProductsListComponent', () => {
  let component: PromotedProductsListComponent;
  let fixture: ComponentFixture<PromotedProductsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotedProductsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotedProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
