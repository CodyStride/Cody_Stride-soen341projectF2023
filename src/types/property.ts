export interface IPropertyData {
  id: string;
  owner: string;
  type: string;
  price: number;
  description?: string;
  location?: string;
  bedrooms: number;
  bathrooms: number;
  image?: string;
  isFavorite?: boolean;
}

export interface IPropertyDataExp extends IPropertyData {
  expand: {
    owner: UserAuthModel;
  }
}

export interface ISignUpPayload {
  username?: string;
  email: string;
  password: string;
  name?: string;
  type: USER_TYPES;
}

export interface IPropertyOfferPayload {
  property: string;
  offeree: string;
  amount: number;
  message?: string;
}

export enum USER_TYPES {
  BROKER = "broker",
  BUYER = "buyer",
  RENTER = "renter",
  SYSADM = "system_admin",
}

export interface ISearchPropertyParams {
  type?: string;
  min_price?: number | string;
  max_price?: number | string;
  bedrooms?: number | string;
  bathrooms?: number | string;
}

export enum OFFER_STATUS {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
}

export interface UserAuthModel {
  id: string;
  username: string;
  email: string;
  name: string;
  avatar?: string;
  type: string;
  created: string;
  updated: string;
  token?: string;
}
