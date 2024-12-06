import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from "./navigation/navigation-bar/navigation-bar.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { UiService } from './services/ui.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationBarComponent, MatSidenavModule, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  sideBarOpen$: Observable<boolean>;


  constructor(public uiService: UiService) { 
    this.sideBarOpen$ = uiService.settingsSideBarOpen$;
  }

}
