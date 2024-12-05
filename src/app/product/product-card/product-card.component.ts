import { Component, Input } from '@angular/core';
import { Product } from '../product';
import {MatCardModule} from '@angular/material/card'; 
import { CartService } from '../../pages/cart/cart.service';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-product-card',
  imports: [
    MatCardModule,
    MatButton
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input({required: true}) product!: Product;

  constructor(private cartService: CartService) { }

  public onAddToCart() {
    this.cartService.addProduct(this.product);
  }

}
