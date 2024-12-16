import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  CreateHostedPageV1RequestDto,
  CreateHostedPageV1ResponseDto,
} from './hosted-page';
import { environment } from '../../environments/environment';
import { TokenAuthService } from '../tokenAuth/token-auth.service';
import { AuthenticateTokenAuthV1ResponseDto } from '../tokenAuth/authenticate-token-auth-v1-response-dto';
import { switchMap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HostedPageService {
  createHostedPageV1ResponseDto: CreateHostedPageV1ResponseDto | undefined;
  createHostedPageV1ResponseDto$: Subject<CreateHostedPageV1ResponseDto> =
    new Subject();

  constructor(
    public httpClient: HttpClient,
    private tokenAuthService: TokenAuthService
  ) {}
  public post(
    createHostedPageV1RequestDto: CreateHostedPageV1RequestDto
  ): void {
    this.tokenAuthService.authenticateTokenAuthV1ResponseDto$
      .pipe(
        switchMap(
          (authResponse: AuthenticateTokenAuthV1ResponseDto | undefined) =>
            this.httpClient.post(
              `${environment.paceGatewayUrl}/hosted-pages`,
              createHostedPageV1RequestDto,
              {
                headers: {
                  Authorization: 'Bearer ' + (authResponse?.bearerToken ?? ''),
                },
              }
            )
        )
      )
      .subscribe((response) => {
        this.createHostedPageV1ResponseDto =
          response as CreateHostedPageV1ResponseDto;
        this.createHostedPageV1ResponseDto$.next(
          this.createHostedPageV1ResponseDto
        );
      });
  }

  public getCreateHostedPageV1ResponseDto$(): Observable<CreateHostedPageV1ResponseDto> {
    return this.createHostedPageV1ResponseDto$.asObservable();
  }

  public getCreateHostedPageV1ResponseDto(): CreateHostedPageV1ResponseDto | undefined {
    return this.createHostedPageV1ResponseDto;
  }


}
