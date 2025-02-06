import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TokenAuthService } from '../token-auth.service';
import { AuthenticateTokenAuthV1RequestDto } from '../authenticate-token-auth-v1-request-dto';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import {MatSelectModule} from '@angular/material/select';
import { GatewayService } from '../../services/gateway.service';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    CommonModule,
    FormsModule,
    MatSelectModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public loginForm: any;

  gatewayControl = new FormControl('localhost'); // FormControl to bind the select field

  gatewayUrls: Array<String> = [
    'localhost',
    'dev-gateway.pace.app',
    'test-gateway.pace.app',
    'acc-gateway.pace.app',
    'sand-gateway.pace.app',
  ];
  selectedGatewayUrl: string | null = 'localhost';

  constructor(
    public formBuilder: FormBuilder,
    private tokenAuthService: TokenAuthService,
    public gatewayService: GatewayService
  ) {
    this.loginForm = this.formBuilder.group({
      username: 'user',
      password: 'user',
    });
  }

  onSubmit(): void {
    const authenticateTokenAuthV1RequestDto =
      AuthenticateTokenAuthV1RequestDto.create(
        this.loginForm.value.username,
        this.loginForm.value.password
      );
    this.tokenAuthService.authenticate(authenticateTokenAuthV1RequestDto);
  }

  onGatewayUrlChange(newValue: string) {
    this.gatewayService.selectedGatewayUrl = newValue;
  }
}
