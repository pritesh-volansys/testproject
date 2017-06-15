import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  serverid = 10;
  serverstatus = "Offline";
  User = "Pritesh";
  allowUsertoadd = false;
  ServerstatusMessage = "Server Not enable";

  getserverName() {
    return this.User;
  }

  OnClickbtton() {
    this.ServerstatusMessage = "Server enable";
  }

  constructor() {
    setTimeout(() => {
      this.allowUsertoadd = true;
    }, 2000)
  }

  ngOnInit() {
  }


  onUpdateServerName(event: Event) {
    this.ServerstatusMessage = (<HTMLInputElement>event.target).value;
  }

}
