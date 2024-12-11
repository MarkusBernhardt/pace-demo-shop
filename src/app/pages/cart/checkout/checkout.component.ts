import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { CartService } from '../cart.service';
import { HostedPageService } from '../../../hosted-page/hosted-page.service';
import { CreateHostedPageV1RequestDto } from '../../../hosted-page/hosted-page';

@Component({
  selector: 'app-checkout',
  imports: [MatRadioModule, FormsModule, MatButtonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  public paymentMethod: string;

  constructor(
    private cartService: CartService,
    private hostedPageService: HostedPageService
  ) {
    this.paymentMethod = 'MASTERCARD';
  }

  createHostedPage() {
    const createHostedPageV1RequestDto = new CreateHostedPageV1RequestDto({
      type: 'CREATE_DEBIT_ORDER',
      amount: this.cartService.getTotalPrice(),
      currencyCode: 'EUR',
    });

    this.hostedPageService.post(createHostedPageV1RequestDto).subscribe();
  }
}
