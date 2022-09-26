export type Photo = {
  color: string;
  image: string;
};

export type Product = {
  id: string;
  title: string;
  description: string;
  photos: Photo[];
  need_kitchen: boolean;
};

export type Product2 = {
  id: string;
  title: string;
  description: string;
  photo: Photo;
};

export type Item = {
  id: string;
  amount: number;
  product: Product2;
};

export type OfferConfiguration = {
  id: string;
  label: string;
  minimum_quantity: number;
  maximum_quantity: number;
  items: Item[];
};

export type Offer = {
  id: string;
  title: string;
  description: string;
  products: Product[];
  amount: number;
  amount_without_discount: number;
  discount_percentage: number;
  maximum_quantity: number;
  offer_configuration?: OfferConfiguration[];
};

export type OffersResponse = {
  label: string;
  maximum_quantity: number;
  offers: Offer[];
};
