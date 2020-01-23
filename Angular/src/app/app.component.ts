import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [`
  // .online {
  //   color: white;
  // }
  // `]
})
export class AppComponent {
  pageName = 'recipe';

  constructor() {
  }

  load(page: string) {
    this.pageName = page;
    alert(page);
  }
  // title = 'my-dream-app';
  // server = false;
  // data = "data";
  // disable = false;
  // created = false;
  // status = "offline";
  // servers = ['data',  'data2'];
  // constructor() {
  //   var as = document.querySelector(".as");
  //   // var el = angular.element(as); 
  //   console.log(as);
  //   this.status = Math.random() > 0.5? 'online' : 'offline';
  //   if(this.data != "") {
  //     this.disable = true;
  //   }
  //   else {
  //     alert("SS");
  //   }
  // setTimeout(() => {
  //   this.server = true;
  //   console.log(document.getElementsByClassName(".ss")[0]);
  // }, 1000);
  // }
  // checkS(event) {  
  // this.data = event.target.value;
  // }

  // clear() {    
  //   this.status = Math.random() > 0.5? 'online' : 'offline';
  //   if(this.status === 'online') {
  //   this.created = true;
  //   }
  //   else {
  //   this.created = false;
  //   }
  //   this.servers.push(this.data);
  // }

  // returnStatus() {
  //   return this.status;
  // }

  // check(event) {
  // if(event.target.value != "") {
  //   this.disable = true;
  // }
  // else {
  //   this.disable = false;
  // }
  // }

  // getColor() {
  //   return this.status === 'offline'? 'red' : 'green';
  // }
}