export class ClientInfo {
  name?:string;
  cardInfos?:CardInfo[];
}

export class CardInfo {
  id?:string;
  balance?:number;
  currencyCode?:number;
  type?:string;
  maskedCardNumber?:string;
}
