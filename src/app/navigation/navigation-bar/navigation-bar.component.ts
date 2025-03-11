import { Component } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CartService } from '../../pages/cart/cart.service';
import { MatDivider } from '@angular/material/divider';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-navigation-bar',
  imports: [
    RouterModule,
    MatIconButton,
    MatIcon,
    MatBadge,
    MatDivider
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {

  public cartItemsCount?: number;

  constructor(public cartService: CartService, public uiService: UiService) {
    this.cartService.products$.subscribe(products => {
      this.cartItemsCount = products.length > 0 ? products.length : undefined;
    });
  }

  public toggleSettingsSideBar() {
    this.uiService.toggleSettingsSideBar();
  }
}
