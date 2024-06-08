export interface WeeklyTransaction {
  id: string;
  dateOccured: string; // You might want to use Date if you intend to parse this string into a Date object
  description: string;
  icon: string;
  category: string;
  amount: number;
  balanceAfter: number;
}
