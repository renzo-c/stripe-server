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

//TODO: typecheck properties which value was temprarily set as null
export type StripeSession = {
  id: string,
  object: string,
  allow_promotion_codes: boolean | null,
  amount_subtotal: number | null,
  amount_total: number | null,
  billing_address_collection: string | null,
  cancel_url: string,
  client_reference_id: string | null,
  currency: string | null,
  customer: any,
  customer_details: any,
  customer_email: any,
  livemode: any,
  locale: any,
  metadata: any,
  mode: string,
  payment_intent: any,
  payment_method_types: string[],
  payment_status: string,
  setup_intent: any,
  shipping: any,
  shipping_address_collection: any,
  submit_type: any,
  subscription: any,
  success_url: string,
  total_details: any
}

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
