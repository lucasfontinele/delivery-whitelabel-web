export type PaymentType = 'cash' | 'credit_card';

export type PaymentOnDeliveryProps = {
  paymentType?: PaymentType;
  onChangePaymentType: (payment?: PaymentType) => void;
};
