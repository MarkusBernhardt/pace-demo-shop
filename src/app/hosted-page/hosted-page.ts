export class CreateHostedPageV1RequestDto {
  type: string;
  amount: number;
  currencyCode?: string;
  phoneNumber?: string;
  emailAddress?: string;
  firstName?: string;
  lastName?: string;
  streetName?: string;
  houseNumber?: string;
  postalCode?: string;
  city?: string;
  countryCode?: string;

  constructor({
    type,
    amount,
    currencyCode,
    phoneNumber,
    emailAddress,
    firstName,
    lastName,
    streetName,
    houseNumber,
    postalCode,
    city,
    countryCode,
  } : {
    type: string,
    amount: number,
    currencyCode: string,
    phoneNumber: string,
    emailAddress: string,
    firstName: string,
    lastName: string,
    streetName: string,
    houseNumber: string,
    postalCode: string,
    city: string,
    countryCode: string,
  }) {
    this.type = type;
    this.amount = amount;
    this.currencyCode = currencyCode;
    this.phoneNumber = phoneNumber;
    this.emailAddress = emailAddress;
    this.firstName = firstName;
    this.lastName = lastName;
    this.streetName = streetName;
    this.houseNumber = houseNumber;
    this.city = city;
    this.countryCode = countryCode;
    this.postalCode = postalCode;

  }
}

export class CreateHostedPageV1ResponseDto {
  hostedPage: {
    id: string;
    state: string;
    type: string;
    paymentMethod: string;
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
    reference: string;
    description: string;
    idempotencyKey: string;
    memo: string;
  };

  constructor({
    hostedPage
  } : {
    hostedPage: {
      id: string,
      state: string,
      type: string,
      paymentMethod: string,
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
      countryCode: string,
      reference: string,
      description: string,
      idempotencyKey: string,
      memo: string
    }
  }) {
    this.hostedPage = hostedPage;
  }
}


