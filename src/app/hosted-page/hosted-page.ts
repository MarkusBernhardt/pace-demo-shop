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

/* {
  "hostedPage": {
    "id": "stringstringstringstringstringst",
    "debtorId": "stringstringstringstringstringst",
    "creditorId": "stringstringstringstringstringst",
    "mandateId": "stringstringstringstringstringst",
    "orderId": "stringstringstringstringstringst",
    "state": "CREATED",
    "type": "CREATE_DEBIT_ORDER",
    "paymentMethod": "MASTERCARD",
    "amount": 0,
    "currencyCode": "str",
    "phoneNumber": "+3839364870",
    "emailAddress": "TyOAaeAO%o9tF(xIKJ5~H%M5Gy02gN;}Nu=(J({tiBy`->'wu\\",
      "firstName": "string",
      "lastName": "string",
      "birthDate": "2024-12-16",
      "birthCity": "string",
      "birthCountryCode": "st",
      "languageCode": "st",
      "nationalityCode": "st",
      "streetName": "string",
      "houseNumber": "string",
      "additionalAddressLine": "string",
      "postalCode": "string",
      "city": "string",
      "stateCode": "st",
      "countryCode": "st",
      "reference": "string",
      "description": "string",
      "idempotencyKey": "string",
      "memo": "string"
    }
  } */

export class CreateHostedPageV1ResponseDto {
  hostedPage: {
    id: string;
    debtorId: string;
    creditorId: string;
    mandateId: string;
    orderId: string;
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
      debtorId: string,
      creditorId: string,
      mandateId: string,
      orderId: string,
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


