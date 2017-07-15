import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../models";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  @Input() products: Product[];


  constructor() { }

  ngOnInit() {
  }

}
