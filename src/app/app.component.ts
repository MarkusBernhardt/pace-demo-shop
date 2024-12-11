import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from "./navigation/navigation-bar/navigation-bar.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { UiService } from './services/ui.service';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { HostedPageSettingsComponent } from "./hosted-page/hosted-page-settings/hosted-page-settings.component";
import { TokenAuthService } from './tokenAuth/token-auth.service';
import { AuthenticateTokenAuthV1ResponseDto } from './tokenAuth/authenticate-token-auth-v1-response-dto';
import { LoginComponent } from './tokenAuth/login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationBarComponent, MatSidenavModule, AsyncPipe, HostedPageSettingsComponent, NgIf, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  sideBarOpen$: Observable<boolean>
  authenticateTokenAuthV1ResponseDto$: Observable<AuthenticateTokenAuthV1ResponseDto | undefined>;

  constructor(public uiService: UiService, public tokenAuthService: TokenAuthService) { 
    this.sideBarOpen$ = uiService.settingsSideBarOpen$;
    this.authenticateTokenAuthV1ResponseDto$ = tokenAuthService.authenticateTokenAuthV1ResponseDto$.asObservable();
  }

}
