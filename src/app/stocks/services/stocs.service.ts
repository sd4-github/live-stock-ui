import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import * as io from "socket.io-client";

@Injectable()
export class StocsService {
  private _socketurl:string = "http://localhost:9090";
  private _socket;

  constructor() { 
    this._socket = io(this._socketurl);
  }

  getAppleStockValues(): Observable<any>{
    return Observable.create(observer => {
      this._socket.on("appleStocks", appleStocks => {
          observer.next(appleStocks);
      })
    })
  }
  getGoogleStockValues(): Observable<any>{
    return Observable.create(observer => {
      this._socket.on("googleStocks", googleStocks => {
        observer.next(googleStocks);
      })
    })
  }
  getMicrosoftStockValues(): Observable<any>{
    return Observable.create(observer => {
      this._socket.on("microsoftStocks", microsoftStocks => {
          observer.next(microsoftStocks);
      })
    })
  }
}
