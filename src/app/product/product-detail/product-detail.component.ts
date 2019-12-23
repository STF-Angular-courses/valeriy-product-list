import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Product from '../common/models/product.contract';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent{
  @Input() item: Product;
  @Output() back = new EventEmitter<boolean>();
  toBack(): void {
    this.back.emit(true);
  }
}
