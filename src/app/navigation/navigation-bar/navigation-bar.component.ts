import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-navigation-bar',
  imports: [],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {

  public cartVisible$;

  constructor(public uiService: UiService) { 
    this.cartVisible$ = this.uiService.showCartSubject;
  }

  toggleCart() {
    this.uiService.toggleCart();
  }

}
