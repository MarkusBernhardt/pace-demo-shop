import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HostedPageService } from '../hosted-page.service';
import { CreateHostedPageV1RequestDto } from '../hosted-page';

@Component({
  selector: 'app-hosted-page-settings',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  templateUrl: './hosted-page-settings.component.html',
  styleUrl: './hosted-page-settings.component.css',
})
export class HostedPageSettingsComponent {
  hostedPageForm: any;

  constructor(
    public formBuilder: FormBuilder,
    private hostedPageService: HostedPageService
  ) {
    this.hostedPageForm = this.formBuilder.group({
      amount: 0,
      currencyCode: 'EUR',
      phoneNumber: '',
      emailAddress: '',
      firstName: '',
      lastName: '',
      birthDate: '',
      birthCity: '',
      birthCountryCode: '',
      languageCode: '',
      nationalityCode: '',
      streetName: '',
      houseNumber: '',
      additionalAddressLine: '',
      postalCode: '',
      city: '',
      stateCode: '',
      countryCode: '',
      type: 'CREATE_DEBIT_ORDER',
    });
  }

  onSubmit(): void {
    const createHostedPageV1RequestDto = new CreateHostedPageV1RequestDto({
      type: this.hostedPageForm.value.type,
      amount: this.hostedPageForm.value.amount,
      currencyCode: this.hostedPageForm.value.currencyCode,
    });

    this.hostedPageService
      .post(createHostedPageV1RequestDto)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
