import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {
    selectedGatewayUrl: string = 'http://localhost:8080';
}
