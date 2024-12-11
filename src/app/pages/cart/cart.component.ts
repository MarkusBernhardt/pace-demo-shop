import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { BehaviorSubject, map } from 'rxjs';
import { Product } from '../../product/product';
import { ProductListItemComponent } from '../../product/product-list-item/product-list-item.component';
import { MatList, MatListItem } from '@angular/material/list';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-cart',
  imports: [
    NgFor,
    AsyncPipe,
    ProductListItemComponent,
    MatList,
    MatListItem,
    NgIf,
    MatDivider,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  public products$: BehaviorSubject<Product[]>;

  constructor(public cartService: CartService) {
    this.products$ = cartService.products$;
  }

  getTotalPrice() {
    return this.products$.pipe(
      map((products) =>
        products.reduce((acc, product) => acc + product.price, 0)
      ),
      map((price) => price.toFixed(2))
    );
  }
}
