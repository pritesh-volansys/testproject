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

getserverName(){
return this.User;
}


  constructor() { }

  ngOnInit() {
  }

}
