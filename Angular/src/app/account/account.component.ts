import { Component, OnInit } from '@angular/core';
import { BasicServiceService } from '../basic-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  accounts = [];
  x = 0;
  constructor(private service: BasicServiceService) { }

  ngOnInit() {
    this.accounts = this.service.profile;
    console.log(this.accounts);
  }


}
