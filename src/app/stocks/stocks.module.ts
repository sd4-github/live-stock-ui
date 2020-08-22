import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveStocsComponent } from './live-stocs/live-stocs.component';
import { StocsService } from './services/stocs.service';



@NgModule({
  declarations: [LiveStocsComponent],
  imports: [
    CommonModule
  ],
  providers: [StocsService],
  exports: [LiveStocsComponent]
})
export class StocksModule { }
