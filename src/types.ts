type Price = {
  billingScheme: string;
  current: string;
  unitAmount: number;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  images: string[];
  price: Price;
  quantity: number;
};

export type CartInfo = {
  id: string,
  amount: number,
  description: string,
} 

export type StripePrice = {
  id: string;
  object: string;
  active: boolean;
  billing_scheme: string;
  created: number;
  currency: string;
  livemode: boolean;
  lookup_key: null;
  metadata: object;
  nickname: string;
  product: string;
  recurring: {
    aggregate_usage: null;
    interval: string;
    interval_count: number;
    usage_type: string;
  };
  tiers_mode: null;
  transform_quantity: null;
  type: string;
  unit_amount: number;
  unit_amount_decimal: string;
};

export type LineItem = {
  price_data: {
    currency: string;
    product_data: {
      name: string;
    };
    unit_amount: number;
  };
  quantity: number;
};
