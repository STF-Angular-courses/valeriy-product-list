import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import {ProductService} from './common/services/product.service';
import { CurrencyPipe } from './common/pipes/currency.pipe';



@NgModule({
  declarations: [
    ProductItemComponent,
    ProductDetailComponent,
    ProductListComponent,
    CurrencyPipe
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ProductService
  ],
  exports: [
    ProductListComponent,
    ProductDetailComponent
  ]
})
export class ProductModule { }
