import { Injectable } from '@angular/core';
import { Product } from '../../product/product';
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

  removeProduct(index: number) {
    this.products$.next(this.products$.value.filter((_, i) => i !== index));
  }
}
