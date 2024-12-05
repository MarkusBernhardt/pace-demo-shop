import { Routes } from '@angular/router';
import { ProductOverviewComponent } from './pages/product-overview/product-overview.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
    { path: '', component: ProductOverviewComponent },
    { path: 'cart', component: CartComponent }
];
