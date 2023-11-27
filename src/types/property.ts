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

export interface ISignUpPayload {
  username?: string;
  email: string;
  password: string;
  name?: string;
  type: USER_TYPES;
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

export interface IBrokerData {
  id: string
  license?: string
  agency?: string
}
