import {ProductModel} from './product.model';

export default class Product implements ProductModel {
  constructor(
    public id: string,
    public type: string,
    public name: string,
    public brand: string,
    public screen: string,
    public description: string,
    public price: number,
    public count: number,
    public discount: number
  ) { }
  showInfo(): void  {
    console.log(`
     ID: ${this.id};
     Type: ${this.type};
     Name: ${this.name};
     Description: ${this.description};
     Price: ${this.price};
     Count: ${this.count};
     Discount: ${this.discount};
    `);
  }
}
