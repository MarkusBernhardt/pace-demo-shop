import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HostedPageService } from '../hosted-page.service';
import { CreateHostedPageV1RequestDto } from '../hosted-page';
import { UiService } from '../../services/ui.service';

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
    public hostedPageService: HostedPageService,
    public uiService: UiService
  ) {
    this.hostedPageForm = this.formBuilder.group({
      type: 'CREATE_DEBIT_ORDER',
      amount: 999,
      currencyCode: 'EUR',
      phoneNumber: '+491715770462',
      emailAddress: 'markus.bernhardt@me.com',
      firstName: 'Markus',
      lastName: 'Bernhardt',
      streetName: '',
      houseNumber: '',
      postalCode: '',
      city: '',
      countryCode: 'DE',
    });
  }

  onSubmit(): void {
    this.hostedPageService.createHostedPageV1RequestDto = new CreateHostedPageV1RequestDto({
      type: this.hostedPageForm.value.type,
      amount: this.hostedPageForm.value.amount,
      currencyCode: this.hostedPageForm.value.currencyCode,
      phoneNumber: this.hostedPageForm.value.phoneNumber,
      emailAddress: this.hostedPageForm.value.emailAddress,
      firstName: this.hostedPageForm.value.firstName,
      lastName: this.hostedPageForm.value.lastName,
      streetName: this.hostedPageForm.value.streetName,
      houseNumber: this.hostedPageForm.value.houseNumber,
      postalCode: this.hostedPageForm.value.postalCode,
      city: this.hostedPageForm.value.city,
      countryCode: this.hostedPageForm.value.countryCode,
      debtorId: this.hostedPageForm.value.debtorId,
      mandateId: this.hostedPageForm.value.mandateId,
    });

    this.uiService.toggleSettingsSideBar();
  }
}
