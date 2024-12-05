import { Component } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import {  MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navigation-bar',
  imports: [
    RouterModule,
    MatIconButton,
    MatIcon,
    MatBadge
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {

  public cartItemsCount?: number;

  constructor(public cartService: CartService) {
    this.cartService.products$.subscribe(products => {
      this.cartItemsCount = products.length > 0 ? products.length : undefined;
    });
  }


}
