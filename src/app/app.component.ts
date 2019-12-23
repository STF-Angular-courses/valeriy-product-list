import { Component } from '@angular/core';
import Product from "./product/common/models/product.contract";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showProductList = true;
  itemDetail = undefined;
  hideAllList() {
    this.showProductList = false;
    this.itemDetail = undefined;
  }
}
