import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from "./navigation/navigation-bar/navigation-bar.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { UiService } from './services/ui.service';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationBarComponent, MatSidenavModule, NgIf, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'pace-demo-shop';

  showCart$: BehaviorSubject<boolean>;

  constructor(public uiService: UiService) { 
    this.showCart$ = this.uiService.showCartSubject;
  }

  cartClosed() {
    this.uiService.showCart = false;
    this.uiService.showCartSubject.next(this.uiService.showCart);
  }
}
