export interface Cover {
  color: string;
  image: string;
}

export interface Logo {
  color: string;
  image: string;
}

export interface Location {
  latitude: string;
  longitude: string;
}

export interface Address {
  line1: string;
  line2: string;
  reference: string;
  zip_code: string;
  location: Location;
}

export interface Profile {
  name: string;
  document_number: string;
  phone_number: string;
  about: string;
  cover: Cover;
  logo: Logo;
  address: Address;
}

export interface PaymentMethods {
  credit: string[];
  debit: string[];
  meal_voucher: string[];
  food_voucher: string[];
  transfer: string[];
}

export interface PayInApp {
  active: boolean;
  maximum_order_value: number;
  payment_methods: PaymentMethods;
}

export interface PaymentMethods2 {
  credit: string[];
  debit: string[];
  meal_voucher: string[];
  food_voucher: string[];
  transfer: string[];
}

export interface PayOnDelivery {
  active: boolean;
  maximum_order_value: number;
  payment_methods: PaymentMethods2;
}

export interface Takeaway {
  estimated_time: number;
}

export interface Geometry {
  type: string;
  coordinates: number[][][];
}

export interface CoverArea {
  delivery_fee: number;
  free_delivery_from: number;
  minimum_order_value: number;
  geometry: Geometry;
}

export interface Delivery {
  estimated_time: number;
  cover_area: CoverArea[];
}

export interface OrderSettings {
  currency: string;
  pay_in_app: PayInApp;
  pay_on_delivery: PayOnDelivery;
  takeaway: Takeaway;
  delivery: Delivery;
}

export interface Schedule {
  opening: string;
  closing: string;
}

export interface OpeningHour {
  weekdays: number[];
  delivery: Schedule;
  takeaway: Schedule;
  kitchen: Schedule;
}

export interface OpeningDay {
  day: string;
  delivery: Schedule;
  takeaway: Schedule;
  kitchen: Schedule;
}

export interface OpeningSchedule {
  status: string;
  opening_hours: OpeningHour[];
  opening_days: OpeningDay[];
  closed_days: string[];
}

export interface StoreResponse {
  id: string;
  profile: Profile;
  order_settings: OrderSettings;
  opening_schedule: OpeningSchedule;
}
