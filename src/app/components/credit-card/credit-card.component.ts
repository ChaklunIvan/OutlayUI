import {Component, OnInit} from '@angular/core';
import {OutlayService} from "../../services/outlay-service";
import {ClientInfo} from "../../interfaces/clientInfo";

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit{

  name : string | undefined;
  cardNumber : string | undefined;

  constructor(private outlayService: OutlayService) {
  }

  ngOnInit(): void {
    this.getCardInfo();
  }

  getCardInfo(): void {
    this.outlayService.getClientInfo()
      .subscribe(x => {
        this.name = x.name;
        this.cardNumber = x.cardInfos?.find(x=> x != null)?.maskedCardNumber;
      });
  }
}
