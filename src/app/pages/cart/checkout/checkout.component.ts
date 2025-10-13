import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { CartService } from '../cart.service';
import { HostedPageService } from '../../../hosted-page/hosted-page.service';
import { GatewayService } from '../../../services/gateway.service';
import { HostedPageSuccess } from '../../../hosted-page/hosted-page';

declare var pace: any;
@Component({
  selector: 'app-checkout',
  imports: [MatRadioModule, FormsModule, MatButtonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  public paymentMethod: string;
  scriptLoaded = false;

  constructor(
    private cartService: CartService,
    private hostedPageService: HostedPageService,
    public gatewayService: GatewayService
  ) {
    this.paymentMethod = 'MASTERCARD';
  }

  async createHostedPage() {
    const createHostedPageV1ResponseDto =
      await this.hostedPageService.createHostedPage();
    const hostedPageId = createHostedPageV1ResponseDto?.hostedPage.id;
    const baseUrl = this.gatewayService.selectedGatewayUrl;
    document.getElementById('pace-container')?.replaceChildren();
    this.loadScript(`${baseUrl}/svelte/pace.js`)
      .then(() => {
        pace.init(hostedPageId, baseUrl);
        pace.hooks.success = (success: HostedPageSuccess) => {
          if(this.hostedPageService.createHostedPageV1RequestDto != null) {
            this.hostedPageService.createHostedPageV1RequestDto.debtorId = success.debtorId;
            this.hostedPageService.createHostedPageV1RequestDto.mandateId = success.mandateId;
          }
          console.log('Demoshop: Pace finished sucessfully');
        };
        pace.hooks.error = () => {
          console.log('Demoshop: Pace finished unsucessfully');
        };
        pace.hooks.ready = () => {
          console.log('Demoshop: Pace is ready');
        };
      })
      .catch((error) => {
        console.error('Failed to load the Svelte script:', error);
      });
  }

  loadScript(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.scriptLoaded) {
        console.log('Script already loaded.');
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = url;
      script.async = true;

      script.onload = () => {
        console.log(`Script loaded from ${url}`);
        this.scriptLoaded = true;
        resolve();
      };

      script.onerror = (error) => {
        console.error(`Error loading script from ${url}`, error);
        reject(error);
      };

      document.body.appendChild(script);
    });
  }

  getAmount() {
    let amount = this.hostedPageService.createHostedPageV1RequestDto?.amount;
    if(!amount) {
      return "0.00 EUR";
    }
    return  (amount / 100) + " EUR";
  }
}
