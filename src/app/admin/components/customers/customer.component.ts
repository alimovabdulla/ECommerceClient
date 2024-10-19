import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import path from 'path';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss',
})
export class CustomerComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService) {
    super(spinner);
  }
  ngOnInit(): void {
     this.showSpinner(SpinnerType.BallAtom)
  }
}
