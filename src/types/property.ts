export interface IPropertyData {
  id: string
  owner: string
  type: string
  price: number
  description?: string
  location?: string
  bedrooms: number
  bathrooms: number
  image?: string
}

export interface IBrokerData {
  id: string
  name: string
  license: string
  agency: string
  user: string
}

export interface ISignUpPayload {
  username?: string;
  email: string;
  password: string;
  name?: string;
  type: USER_TYPES;
}

export enum USER_TYPES {
  BROKER = 'broker',
  BUYER = 'buyer',
  RENTER = 'renter',
  SYSADM = "system_admin",
}