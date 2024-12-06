import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HostedPage } from './hosted-page';

@Injectable({
  providedIn: 'root'
})
export class HostedPageService {

  constructor(public httpClient: HttpClient) { }

  public post(HostedPage: HostedPage) {
    return this.httpClient.post('https://api.stripe.com/v1/checkout/sessions', HostedPage);
  }

}
