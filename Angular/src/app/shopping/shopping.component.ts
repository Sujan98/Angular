import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Shop } from '../shop.model';
import { map } from 'rxjs/operators';
import { BasicServiceService } from '../basic-service.service';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
  animations: [
    trigger('shopState', [
      state('nuls', style({
        opacity: 0,
        transform: 'rotate(0) scale(1)'
      })),
      transition('void => *', [style({
        opacity: 1,
        transform: 'translateX(-100px)'
      }), animate(300)]),
      transition('* => void', [animate(300), style({
        opacity: 1,
        transform: 'translateX(100px)'
      })
      ])
    ])
  ]
})

export class ShoppingComponent implements OnInit {
  amounta = "welcome";
  state;
  Shop = []
  k: Shop = new Shop('dosa', 6);
  constructor(private http: HttpClient, private service: BasicServiceService) {
  }

  ngOnInit() {
    this.http.get('https://recipe-59b3e.firebaseio.com/posts.json')
      .pipe(
        map(responseData => {
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              this.Shop.push({ ...responseData[key] })
            }
          }
          return this.Shop;
        })
      )
      .subscribe(responseData => {

        console.log(this.Shop);
        console.log(responseData);

      });
  }

  itemAdded(item: { name: string, amount: number }) {
    this.Shop.push({ name: item.name, amount: item.amount });
    this.http.post('https://recipe-59b3e.firebaseio.com/posts.json', { name: item.name, amount: item.amount }).subscribe(responseData => {
      console.log(responseData);
      this.service.AddRecipe(name);
    });
  }

  itemDeleted() {
    this.Shop.pop();
  }

  clearItems() {
    var x = this.Shop.length;
    this.Shop.splice(0, x);
  }

  buy(x) {
    x.amount--;
  }
  check(event: Event) {
    console.log("ss");
  }
}
