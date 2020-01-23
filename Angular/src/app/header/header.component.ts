import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BasicServiceService } from '../basic-service.service';
import { BinaryOperator } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dropV: boolean = false;
  @Output() page = new EventEmitter<string>();
  formValidate = 0;
  constructor(private form: BasicServiceService, private router: Router) {
    this.form.event.subscribe(
      (e: BinaryOperator) => this.formValidate = e
    );
  }

  ngOnInit() {
  }

  routerCheck() {
    console.log(this.router);
    this.form.formR === 0 ? "" : this.router.navigate(["/recipe"]);
  }

  pageSelect(feature: string) {
    this.page.emit(feature);
  }

  signout() {
    this.dropV = !this.dropV;
    this.form.formR = 0;
    this.formValidate = 0;
    this.router.navigate(["/"]);
  }

  drop() {
    this.dropV = !this.dropV;
  }

  detail() {
    this.dropV = !this.dropV;
    this.router.navigate(["/details"]);
  }

}
