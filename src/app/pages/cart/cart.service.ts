import { Injectable } from '@angular/core';
import { Product } from '../../product/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private products: Product[] = [];
  public products$ = new BehaviorSubject<Product[]>([]);

  constructor() {}

  addProduct(product: Product) {
    this.products.push(product);
    this.products$.next([...this.products]);
  }

  removeProduct(index: number) {
    this.products.splice(index, 1);
    this.products$.next([...this.products]);
  }

  getTotalPrice() {
    return this.products.reduce((acc, product) => acc + product.price, 0);
  }
}
