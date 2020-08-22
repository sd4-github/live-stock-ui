import { Component, OnInit } from '@angular/core';
import { StocsService } from '../services/stocs.service';

@Component({
  selector: 'live-stocs',
  templateUrl: './live-stocs.component.html',
  styleUrls: ['./live-stocs.component.css']
})
export class LiveStocsComponent implements OnInit {

  constructor(private _stockService:StocsService) {}
  title: string = "Live Stocks of Apple,Google and Microsoft";
  appleStockValue: number = 0;
  googleStockValue: number = 0;
  microsoftStockValue: number = 0;

  ngOnInit(): void {
    this._stockService.getAppleStockValues().subscribe(
      appleStock => this.appleStockValue = appleStock,
      err => console.log(err)
    );
    this._stockService.getGoogleStockValues().subscribe(
      googleStock => this.googleStockValue = googleStock,
      err => console.log(err)
    );
    this._stockService.getMicrosoftStockValues().subscribe(
      msStock => this.microsoftStockValue = msStock,
      err => console.log(err)
    );
  }

}
