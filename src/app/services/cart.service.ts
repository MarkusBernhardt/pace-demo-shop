import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public products$ = new BehaviorSubject<Product[]>([]);

  constructor() { }

  addProduct(product: Product) {
    this.products$.next([...this.products$.value, product]);
  }

  removeProduct(product: Product) {
    this.products$.next(this.products$.value.filter(p => p !== product));
  }
}
