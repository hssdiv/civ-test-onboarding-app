import { AccountData } from "../../../../types";

export const getFakeAccountData = (): AccountData => ({
  id: 1234567890,
  bank: 'Kuda Bank',
  type: 'Savings',
  balance: 1200000,
  currency: 'N',
  created_at: '15/05/20 10:03 AM',
  transactions: [
    {
      id: 4,
      from: 'John Ogaga',
      bank: 'Zenith Bank',
      date: '12:03 AM',
      balance: 2098300,
    },
    {
      id: 3,
      from: 'The Place Restuarant',
      bank: 'GT-Bank',
      date: '12:03 AM',
      balance: -98300,
    },
    {
      id: 2,
      from: 'Transfer to Philip',
      bank: 'GT-Bank',
      date: '12:03 AM',
      balance: -29800,
    },
    {
      id: 1,
      from: 'Habib Yogurt',
      bank: 'GT-Bank',
      date: '12:03 AM',
      balance: -411500,
    }
  ],
})