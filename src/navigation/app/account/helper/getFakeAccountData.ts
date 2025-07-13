import { AccountData } from "../../../../types";

export const getFakeAccountData = (): AccountData => ({
  id: 1234567890,
  bank: 'Kuda Bank',
  accountType: "Savings",
  availableBalance: 12000,
  currency: "N",
  dateAdded: "15/05/20, 10:03 AM",
  transactions: [
    {
      name: "John Ogaga",
      bank: "Zenith Bank",
      time: "12:03 AM",
      amount: 20983
    },
    {
      name: "The Place Restuarant",
      bank: "GT-Bank",
      time: "12:03 AM",
      amount: -983
    },
    {
      name: "Transfer to Philip",
      bank: "Zenith Bank",
      time: "12:03 AM",
      amount: -298
    },
    {
      name: "Habib Yogurt",
      bank: "Zenith Bank",
      time: "12:03 AM",
      amount: -4155
    }
  ]
})