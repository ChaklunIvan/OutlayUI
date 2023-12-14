import {WeeklyTransaction} from "./weeklyTransaction";

export interface WeeklyTransactionInfo {
  dayOfWeek: number;
  amount: number;
  transactions : Array<WeeklyTransaction>;
}
