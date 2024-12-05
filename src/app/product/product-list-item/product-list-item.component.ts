import { Component, Input } from '@angular/core';
import { Product } from '../product';
import { MatListModule } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list-item',
  imports: [MatListModule, MatIcon],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.css'
})
export class ProductListItemComponent {

  @Input({required: true}) product!: Product;

  constructor(private cartService: CartService) { }

  public onRemoveFromCart() {
    this.cartService.removeProduct(this.product);
  }

}
