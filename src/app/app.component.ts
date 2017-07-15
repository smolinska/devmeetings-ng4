import {Component} from '@angular/core';
import {Product} from "./models";
import {ProductsService} from "./products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  products;
  promotedProducts;

  constructor(ps: ProductsService) {
    this.products = ps.products;
    this.promotedProducts = ps.products.filter(p => p.isPromoted);
  }


}
