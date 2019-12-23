import { Injectable } from '@angular/core';
import Product from '../models/product.contract';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: Product[] = [
    new Product(
      'CBP0000',
      'chocolate bar',
      'Roshen Chocolate',
      'Roshen',
      'assets/',
      'gift from cryvavyi baryga',
      45.34,
      1,
      0.03
    ),
    new Product(
      'CBP0001',
      'chocolate bar',
      'Roshen Zoryana Nich',
      'Roshen',
      'assets/',
      'gift from cryvavyi baryga',
      245,
      1,
      0.04
    ),
    new Product(
      'CPB0003',
      'chocolate bar',
      'Svitoch Chocolate Bar',
      'Svitoch',
      'assets/',
      'gift from ne cryvavyi baryga',
      35.88,
      3,
      0.03
    ),
    new Product(
      'P0000',
      'chocolate bar',
      'Roshen Chocolate',
      'Roshen',
      'assets/',
      'gift from cryvavyi baryga',
      45.34,
      1,
      0.03
    ),
    new Product(
      'P0000',
      'chocolate bar',
      'Roshen Chocolate',
      'Roshen',
      'assets/',
      'gift from cryvavyi baryga',
      45.34,
      1,
      0.03
    ),
  ];
  constructor() { }
  add(product?: Product): void {
    if (!product) {
      this.productList.push(
        new Product(
          'CBP0000',
          'chocolate bar',
          'Roshen Chocolate',
          'Roshen',
          'assets/',
          'gift from cryvavyi baryga',
          45.34,
          1,
          0.03
        ),
      );
      return;
    }
    this.productList.push(product);
  }
  remove(productId?: string): void {
    if (productId) {
      const index = this.productList.findIndex((elem) =>  elem.id === productId);
      this.productList.splice(index, 1);
      return;
    }
    this.productList.splice(this.productList.length - 1, 1);
  }
}
