export interface Transaction {
  name: string;
  bank: string;
  time: string;
  amount: number;
}

export interface AccountData {
  id: number;
  accountType: string;
  availableBalance: number;
  currency: string;
  dateAdded: string;
  transactions: Transaction[];
}