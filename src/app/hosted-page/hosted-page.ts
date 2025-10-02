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
  debtorId?: string;
  mandateId?: string;
  languageCode?: string;
  memo?: string;

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
    debtorId,
    mandateId,
    languageCode,
    memo
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
    debtorId: string,
    mandateId: string,
    languageCode: string,
    memo: string,
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
    this.debtorId = debtorId;
    this.mandateId = mandateId;
    this.languageCode = languageCode;
    this.memo = memo;
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

export class HostedPageSuccess {
  debtorFirstName?: string;
  debtorId?: string;
  debtorLastName?: string;
  hostedPageId?: string;
  mandateId?: string;
  mandateReference?: string;
  mandateState?: string;
  mandateType?: string;
  orderAmount?: number;
  orderCurrencyCode?: string;
  orderId?: string;
  orderReference?: string;
  orderState?: string;
  orderType?: string;
  orderUseBalance?: boolean;
  paymentCardExpiryMonth?: number;
  paymentCardExpiryYear?: number;
  paymentCardIssuer?: string;
  paymentCardNumberLast4?: number;

  constructor({
    debtorFirstName,
    debtorId,
    debtorLastName,
    hostedPageId,
    mandateId,
    mandateReference,
    mandateState,
    mandateType,
    orderAmount,
    orderCurrencyCode,
    orderId,
    orderReference,
    orderState,
    orderType,
    orderUseBalance,
    paymentCardExpiryMonth,
    paymentCardExpiryYear,
    paymentCardIssuer,
    paymentCardNumberLast4
  } : {
    debtorFirstName: string,
    debtorId: string,
    debtorLastName: string,
    hostedPageId: string,
    mandateId: string,
    mandateReference: string,
    mandateState: string,
    mandateType: string,
    orderAmount: number,
    orderCurrencyCode: string,
    orderId: string,
    orderReference: string,
    orderState: string,
    orderType: string,
    orderUseBalance: boolean,
    paymentCardExpiryMonth: number,
    paymentCardExpiryYear: number,
    paymentCardIssuer: string,
    paymentCardNumberLast4: number
  }) {
    this.debtorFirstName = debtorFirstName;
    this.debtorId = debtorId;
    this.debtorLastName = debtorLastName;
    this.hostedPageId = hostedPageId;
    this.mandateId = mandateId;
    this.mandateReference = mandateReference;
    this.mandateState = mandateState;
    this.mandateType = mandateType;
    this.orderAmount = orderAmount;
    this.orderCurrencyCode = orderCurrencyCode;
    this.orderId = orderId;
    this.orderReference = orderReference;
    this.orderState = orderState;
    this.orderType = orderType;
    this.orderUseBalance = orderUseBalance;
    this.paymentCardExpiryMonth = paymentCardExpiryMonth;
    this.paymentCardExpiryYear = paymentCardExpiryYear;
    this.paymentCardIssuer = paymentCardIssuer;
    this.paymentCardNumberLast4 = paymentCardNumberLast4;

  }
}

