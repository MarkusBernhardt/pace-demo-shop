import { Routes } from '@angular/router';
import { ProductOverviewComponent } from './pages/product-overview/product-overview.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/cart/checkout/checkout.component';

export const routes: Routes = [
  { path: '', component: ProductOverviewComponent },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
];
