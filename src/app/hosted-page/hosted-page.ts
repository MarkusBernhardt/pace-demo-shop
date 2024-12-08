export class HostedPage {
  type: HostedPageType;
  paymentMethod: PaymentMethod;
  amount: number;
  currencyCode: string;
  phoneNumber: string;
  emailAddress: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  birthCity: string;
  birthCountryCode: string;
  languageCode: string;
  nationalityCode: string;
  streetName: string;
  houseNumber: string;
  additionalAddressLine: string;
  postalCode: string;
  city: string;
  stateCode: string;
  countryCode: string;

  constructor(
    type: HostedPageType,
    paymentMethod: PaymentMethod,
    amount: number,
    currencyCode: string,
    phoneNumber: string,
    emailAddress: string,
    firstName: string,
    lastName: string,
    birthDate: string,
    birthCity: string,
    birthCountryCode: string,
    languageCode: string,
    nationalityCode: string,
    streetName: string,
    houseNumber: string,
    additionalAddressLine: string,
    postalCode: string,
    city: string,
    stateCode: string,
    countryCode: string
  ) {
    this.type = type;
    this.paymentMethod = paymentMethod;
    this.amount = amount;
    this.currencyCode = currencyCode;
    this.phoneNumber = phoneNumber;
    this.emailAddress = emailAddress;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.birthCity = birthCity;
    this.birthCountryCode = birthCountryCode;
    this.languageCode = languageCode;
    this.nationalityCode = nationalityCode;
    this.streetName = streetName;
    this.houseNumber = houseNumber;
    this.additionalAddressLine = additionalAddressLine;
    this.postalCode = postalCode;
    this.city = city;
    this.stateCode = stateCode;
    this.countryCode = countryCode;
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
