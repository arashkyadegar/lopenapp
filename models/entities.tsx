export class StateEntity {
  name: string = "";
  id: string = "";
}

export class CityEntity {
  name: string = "";
  stateId: string = "";
}

export class FactorEntity {
  id: string = "";
  fName: string = "";
  lName: string = "";
  mobile: string = "";
  phone: string = "";
  address: string = "";
  state: string = "";
  city: string = "";
  postCode: string = "";
  info: string = "";
}
export class FactorForm extends FactorEntity {
  formIsValid: boolean = false;
  fNameError: string = "";
  lNameError: string = "";
  mobileError: string = "";
  phoneError: string = "";
  addressError: string = "";
  stateError: string = "";
  cityError: string = "";
  postCodeError: string = "";
}
module.exports = {
  StateEntity,
  CityEntity,
  FactorForm
};
