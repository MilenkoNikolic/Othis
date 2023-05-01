export interface ICustomer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
}

export interface ITransaction {
  id: string;
  customer_id: string;
  amount: number;
  subject: string;
  description: string;
  datetime: number;
}
