import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  public showCart: boolean = false;
  public showCartSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.showCart);

  constructor() { }

  public toggleCart() {
    this.showCart = !this.showCart;
    this.showCartSubject.next(this.showCart);
  }
}
