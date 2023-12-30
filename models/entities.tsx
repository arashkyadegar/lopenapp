export class StateEntity {
  name: string = "";
  id: string = "";
}

export class CityEntity {
  name: string = "";
  stateId: string = "";
}

export class ProductEntity {
  _id: string = "";
  name: string = "";
  weight: string = "";
  size: string = "";
  healthId: string = "";
  type: string = "";
  components: string = "";
  desc: string = "";
  score: number = 0;
  price: number = 0;
  display: boolean = true;
  isAvailable: boolean = true;
  tags: string[] = [];
  image: string = "";
  images: string[] = [];
  userId: string = "";
  date!: Date;
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
  FactorForm,
  ProductEntity
};
