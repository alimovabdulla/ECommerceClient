import { Component, OnInit } from '@angular/core';
import {
  AlertifyOptions,
  AlertifyService,
  MessageType,
  Position,
} from '../../../services/admin/alertify.service';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [], // Lazım olan modulları buraya əlavə edin, əgər varsa
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'], // "styleUrl" olmalıdır "styleUrls"
})
export class DashboardComponent extends BaseComponent implements OnInit {
  constructor(private alertify: AlertifyService, spinner : NgxSpinnerService) {
     super(spinner)
  }

  ngOnInit(): void {
   this.showSpinner(SpinnerType.BallSpinClockwiseFadeRotating)
  }

  c() {
    const options = new AlertifyOptions();
    this.alertify.message('Hallo', options);
    options.messageType = MessageType.Warning; // Mesaj tipini belirleyin
    options.position = Position.TopRight; // Pozisyonu belirleyin
    options.delay = 1; // Gecikme süresini belirleyin
    options.dismissOthers = false; // Diğer mesajları kapatma seçeneği
   
  }

  d() {
    this.alertify.dismiss();
  }
}
