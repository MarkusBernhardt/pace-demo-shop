import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticateTokenAuthV1RequestDto } from './authenticate-token-auth-v1-request-dto';
import { AuthenticateTokenAuthV1ResponseDto } from './authenticate-token-auth-v1-response-dto';
import { BehaviorSubject } from 'rxjs';
import { GatewayService } from '../services/gateway.service';

@Injectable({
  providedIn: 'root',
})
export class TokenAuthService {
  private authenticateTokenAuthV1ResponseDto?: AuthenticateTokenAuthV1ResponseDto;
  public authenticateTokenAuthV1ResponseDto$ = new BehaviorSubject<
    AuthenticateTokenAuthV1ResponseDto | undefined
  >(this.authenticateTokenAuthV1ResponseDto);

  constructor(
    private httpClient: HttpClient,
    private gatewayService: GatewayService
  ) {}

  authenticate(
    authenticateTokenAuthV1RequestDto: AuthenticateTokenAuthV1RequestDto
  ) {
    this.httpClient
      .post(
        `${this.gatewayService.selectedGatewayUrl}/api/v1/token-auth/authenticate`,
        authenticateTokenAuthV1RequestDto
      )
      .subscribe((response: any) => {
        this.authenticateTokenAuthV1ResponseDto =
          AuthenticateTokenAuthV1ResponseDto.create(response);
        this.authenticateTokenAuthV1ResponseDto$.next(
          this.authenticateTokenAuthV1ResponseDto
        );
      });
  }
}
