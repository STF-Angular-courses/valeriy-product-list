import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Product from '../common/models/product.contract';
import {ProductService} from "../common/services/product.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() item: Product;
  @Output() showDetail = new EventEmitter<Product>();
  @Output() changeList = new EventEmitter<boolean>();
  constructor(private productService: ProductService) { }
  showItemDetail() {
    this.showDetail.emit(this.item);
  }
  removeItem(itemId: string) {
    this.productService.remove(itemId);
    this.changeList.emit(true);
  }
}
