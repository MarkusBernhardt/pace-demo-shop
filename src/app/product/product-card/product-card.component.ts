import { Component, Input } from '@angular/core';
import { Product } from '../product';
import {MatCardModule} from '@angular/material/card'; 
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [
    MatCardModule,
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
