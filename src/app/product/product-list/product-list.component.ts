import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductService} from "../common/services/product.service";
import Product from "../common/models/product.contract";
import {Event} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Output() itemToDetail = new EventEmitter<Product>();
  productList: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productList = this.productService.productList;
  }
  updateList(update: boolean) {
    // this.productList = this.productService.productList;
  }
  showDetail(product: Product) {
    this.itemToDetail.emit(product);
  }
}
