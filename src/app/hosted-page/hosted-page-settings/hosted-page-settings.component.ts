import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-hosted-page-settings',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule
  ],
  templateUrl: './hosted-page-settings.component.html',
  styleUrl: './hosted-page-settings.component.css',
})
export class HostedPageSettingsComponent {
  hostedPageForm: any;

  constructor(public formBuilder: FormBuilder) {
    this.hostedPageForm = this.formBuilder.group({
      amount: '',
      currencyCode: '',
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
    });
  }

  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.hostedPageForm.value);
  }
}
