import { Component, Input } from '@angular/core';
import { Product } from '../product';
import {MatCardModule} from '@angular/material/card'; 

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


}
