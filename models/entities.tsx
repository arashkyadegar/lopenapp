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
  weight: number = 0;
  size: string = "";
  healthId: string = "";
  type: string = "";
  components: string = "";
  desc: string = "";
  score: number = 0;
  price: number = 0;
  display: boolean = true;
  isAvailable: boolean = true;
  tags: string = "";
  image: string = "";
  files: string[] = [];
  images: string[] = [];
  userId: string = "";
  date!: Date;
}
export class DiscountEntity {
  _id: string = "";
  sDate: string = "";
  eDate: string = "";
  title: string = "";
  type: number = 0;
  value: number = 0;
  productId: string = "";
  date!: Date;
}
export class AddProductForm extends ProductEntity {
  nameError: string = "";
  weightError: string = "";
  sizeError: string = "";
  healthIdError: string = "";
  typeError: string = "";
  componentsError: string = "";
  descError: string = "";
  scoreError: string = "";
  priceError: string = "";
  displayError: string = "";
  isAvailableError: string = "";
  tagsError: string = "";
  imageError: string = "";
  imagesError: string = "";
  userIdError: string = "";
  formIsValid: boolean = false;
}

export class AddDiscountForm extends DiscountEntity {
  sDateError: string = "";
  eDateError: string = "";
  titleError: string = "";
  valueError: string = "";
  productIdError: string = "";
  formIsValid: boolean = false;
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

export class FactorDetailEntity {
  _id: string = "";
  factorId: string = "";
  productId: string = "";
  unitPrice: number = 0;
  discount: number = 0;
  count: number = 1;
  prices: number = 0;
  date!: Date;
}

export class FaqEntity {
  _id: string = "";
  groupId: number = 0;
  question: string = "";
  answer: string = "";
  display: boolean = true;
  priority: number = 0;
  date!: Date;
}
export class ILoginFields {}

export class LoginForm {
  email: string = "";
  password: string = "";
  emailError: string = "";
  passwordError: string = "";
  formIsValid: boolean = false;
}

export class SiteInfoEntity {
  _id: string = "1";
  address1: string = "";
  address2: string = "";
  tel1: string = "";
  tel2: string = "";

  mobile1: string = "";
  mobile2: string = "";

  email1: string = "";
  email2: string = "";

  twitter: string = "";
  googlePlus: string = "";
  instagram: string = "";
  linkedin: string = "";
  whatsapp: string = "";
  skype: string = "";

  headerImages: string[] = [];

  logo1: string = "";
  logo2: string = "";

  footerImage1: string = "";
  footerImage2: string = "";
  headerTitle: string = "";
  footerDescription: string = "";
  copyRightText: string = "";
  copyRightYear: string = "";
  languageId: string = "";
}
export class SiteinfoForm extends SiteInfoEntity {
  address1Error: string = "";
  address2Error: string = "";
  tel1Error: string = "";
  tel2Error: string = "";
  mobile1Error: string = "";
  mobile2Error: string = "";
  email1Error: string = "";
  email2Error: string = "";
  twitterError: string = "";
  googlePlusError: string = "";
  instagramError: string = "";
  linkedinError: string = "";
  whatsappError: string = "";
  skypeError: string = "";
  headerImagesError: string[] = [];
  logo1Error: string = "";
  logo2Error: string = "";
  footerImage1Error: string = "";
  footerImage2Error: string = "";
  headerTitleError: string = "";
  footerDescriptionError: string = "";
  copyRightTextError: string = "";
  copyRightYearError: string = "";
  languageIdError: string = "";
  formIsValidError: boolean = false;
}
module.exports = {
  SiteInfoEntity,
  StateEntity,
  CityEntity,
  FactorForm,
  ProductEntity,
  FactorDetailEntity,
  AddProductForm,
  DiscountEntity,
  AddDiscountForm,
  FaqEntity,
  LoginForm,
};
