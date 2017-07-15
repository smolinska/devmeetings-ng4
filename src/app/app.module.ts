import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PromotedProductsComponent } from './promoted-products/promoted-products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { PromotedProductsListComponent } from './promoted-products-list/promoted-products-list.component';
// import { FilterPipe } from './filter.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductsService} from "./products.service";
import { OrderFormComponent } from './order-form/order-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavbarComponent,
    PromotedProductsComponent,
    ProductsListComponent,
    PromotedProductsListComponent,
    OrderFormComponent,
    // FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
