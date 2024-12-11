export class CreateHostedPageV1RequestDto {
  type: string;
  paymentMethod?: PaymentMethod;
  amount: number;
  currencyCode?: string;
  phoneNumber?: string;
  emailAddress?: string;
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  birthCity?: string;
  birthCountryCode?: string;
  languageCode?: string;
  nationalityCode?: string;
  streetName?: string;
  houseNumber?: string;
  additionalAddressLine?: string;
  postalCode?: string;
  city?: string;
  stateCode?: string;
  countryCode?: string;

  constructor({
    type,
    amount,
    currencyCode
  } : {
    type: string,
    amount: number,
    currencyCode: string
  }) {
    this.type = type;
    this.amount = amount;
    this.currencyCode = currencyCode;
  }
}
export class HostedPageType {
  CREATE_DEBIT_ORDER: string;

  constructor(CREATE_DEBIT_ORDER: string) {
    this.CREATE_DEBIT_ORDER = CREATE_DEBIT_ORDER;
  }
}

export class PaymentMethod {
  MASTERCARD: string;
  VISA: string;
  SEPA: string;

  constructor(MASTERCARD: string, VISA: string, SEPA: string) {
    this.MASTERCARD = MASTERCARD;
    this.VISA = VISA;
    this.SEPA = SEPA;
  }
}
