import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  CreateHostedPageV1RequestDto,
  CreateHostedPageV1ResponseDto,
} from './hosted-page';
import { TokenAuthService } from '../tokenAuth/token-auth.service';
import { AuthenticateTokenAuthV1ResponseDto } from '../tokenAuth/authenticate-token-auth-v1-response-dto';
import { switchMap } from 'rxjs/operators';
import {firstValueFrom, Observable, Subject} from 'rxjs';
import { GatewayService } from '../services/gateway.service';

@Injectable({
  providedIn: 'root',
})
export class HostedPageService {
  createHostedPageV1RequestDto: CreateHostedPageV1RequestDto | undefined;

  constructor(
    public httpClient: HttpClient,
    private tokenAuthService: TokenAuthService,
    private gatewayService: GatewayService
  ) {}

  public async createHostedPage(): Promise<CreateHostedPageV1ResponseDto> {
    const response = await firstValueFrom(this.tokenAuthService.authenticateTokenAuthV1ResponseDto$
      .pipe(
        switchMap(
          (authResponse: AuthenticateTokenAuthV1ResponseDto | undefined) =>
            this.httpClient.post(
              `${this.gatewayService.selectedGatewayUrl}/api/v1/hosted-pages`,
              this.createHostedPageV1RequestDto,
              {
                headers: {
                  Authorization: 'Bearer ' + (authResponse?.bearerToken ?? ''),
                },
              }
            )
        )
      ));

      return response as CreateHostedPageV1ResponseDto;
  }
}
