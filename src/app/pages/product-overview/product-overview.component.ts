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
      name: 'Product 1',
      price: 100,
      image: 'https://via.placeholder.com'
    },
    {
      name: 'Product 2',
      price: 200,
      image: 'https://via.placeholder.com'
    },
    {
      name: 'Product 3',
      price: 300,
      image: 'https://via.placeholder.com'
    }
  ];

}
