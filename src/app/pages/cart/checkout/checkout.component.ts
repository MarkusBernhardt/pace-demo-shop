import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { CartService } from '../cart.service';
import { HostedPageService } from '../../../hosted-page/hosted-page.service';
import { environment } from '../../../../environments/environment';

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
    private hostedPageService: HostedPageService
  ) {
    this.paymentMethod = 'MASTERCARD';
  }

  createHostedPage() {
    const createHostedPageV1ResponseDto =
      this.hostedPageService.getCreateHostedPageV1ResponseDto();
    const hostedPageId = createHostedPageV1ResponseDto?.hostedPage.id;
    this.loadScript(`${environment.paceBaseUrl}/svelte/pace.js`)
      .then(() => {
        pace.init({
          props: { hostedPageId },
        });
        pace.hooks.success = () => {
          console.log('Demoshop: Pace finished sucessfully');
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
}
