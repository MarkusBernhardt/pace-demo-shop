import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateHostedPageV1RequestDto } from './hosted-page';
import { environment } from '../../environments/environment';
import { TokenAuthService } from '../tokenAuth/token-auth.service';
import { AuthenticateTokenAuthV1ResponseDto } from '../tokenAuth/authenticate-token-auth-v1-response-dto';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HostedPageService {
  constructor(
    public httpClient: HttpClient,
    private tokenAuthService: TokenAuthService
  ) {}

  public post(createHostedPageV1RequestDto: CreateHostedPageV1RequestDto) {
    return this.tokenAuthService.authenticateTokenAuthV1ResponseDto$.pipe(
      switchMap((response: AuthenticateTokenAuthV1ResponseDto | undefined) => {
        return this.httpClient.post(
          `${environment.paceGatewayUrl}/hosted-pages`,
          createHostedPageV1RequestDto,
          {
            headers: {
              Authorization: 'Bearer ' + (response?.bearerToken ?? ''),
            },
          }
        );
      })
    );
  }
}
