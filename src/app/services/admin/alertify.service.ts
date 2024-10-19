import { Injectable } from '@angular/core';
declare var alertify: any;

@Injectable({
  providedIn: 'root',
})
export class AlertifyService {
  constructor() {}
  message(message: string, options: AlertifyOptions) {
    alertify.set('notifier', 'position', options.position);
    alertify.set('notifier', 'delay', options.delay);
    const msj = alertify[options.messageType](message);
    if (options.dismissOthers) msj.dismissOthers();
  }
  dismiss() {
    alertify.dismissAll();
  }
}

export class AlertifyOptions {
  messageType: MessageType = MessageType.Error;
  position: Position = Position.BottomCenter;
  delay: number = 3;
  dismissOthers: boolean = false;
}

export enum MessageType {
  Error = 'error',
  Message = 'message',
  Success = 'success',
  Notify = 'notify',
  Warning = 'warning',
}

export enum Position {
  TopCenter = 'top-center',
  TopRight = 'top-right',
  TopLeft = 'top-left',
  BottomRight = 'bottom-right',
  BottomLeft = 'bottom-left',
  BottomCenter = 'bottom-center',
}
