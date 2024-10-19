import { OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

export class BaseComponent {
  constructor(private spinner: NgxSpinnerService) {}
  showSpinner(SpinnerNameType: string) {
    this.spinner.show(SpinnerNameType);
    setTimeout(() => this.hideSpinner(SpinnerNameType), 1000);
  }
  hideSpinner(SpinnerNameType: string) {
    this.spinner.hide(SpinnerNameType);
  }
}

export enum SpinnerType {
  BallAtom = 's1',
  BallScaleMultiple = 's2',
  BallSpinClockwiseFadeRotating = 's3',
}
