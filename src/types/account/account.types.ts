interface Transaction {
      id: number;
      from: string;
      bank: string;
      date: string;
      balance: number;
    }

export interface AccountData {
  id: number;
  bank: string;
  type: string;
  balance: number;
  currency: string;
  created_at: string;
  transactions: Transaction[];
}