import { Component } from '@angular/core';
import { ProductCardComponent } from "../../product/product-card/product-card.component";
import { NgFor } from '@angular/common';
import { Product } from '../../product/product';

@Component({
  selector: 'app-product-overview',
  imports: [ProductCardComponent, NgFor],
  templateUrl: './product-overview.component.html',
  styleUrl: './product-overview.component.css'
})
export class ProductOverviewComponent {

  // list of products
  products: Array<Product> = [
    {
      name: 'Sporty',
      price: 119.99,
      imageUrl: 'images/1.png'
    },
    {
      name: 'Funky',
      price: 199.99,
      imageUrl: 'images/2.png'
    },
    {
      name: 'Casual',
      price: 99.99,
      imageUrl: 'images/3.png'
    },
    {
      name: 'Classic',
      price: 149.99,
      imageUrl: 'images/4.png'
    },
  ];

}
