import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TokenAuthService } from '../token-auth.service';
import { AuthenticateTokenAuthV1RequestDto } from '../authenticate-token-auth-v1-request-dto';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public loginForm: any;

  constructor(
    public formBuilder: FormBuilder,
    private tokenAuthService: TokenAuthService
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
}
