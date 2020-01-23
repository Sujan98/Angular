import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Recipe } from '../../recipe.model';
import { BasicServiceService } from '../../basic-service.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-detail',
  templateUrl: './recipe_detail.component.html',
  styleUrls: ['./recipe_detail.component.css'],
  animations: [
    trigger('recipeState', [
      state('nuls', style({
        opacity: 0,
        transform: 'rotate(0) scale(1)'
      })),
      transition('void => *', [style({
        opacity: 0,
        transform: 'rotate(180deg) scale(2.5)'
      }), animate(500)]),
      transition('* => void', [animate(500), style({
        opacity: 0,
        transform: 'rotate(360deg) scale(1)'
      })])
    ]),
    trigger('animateState', [
      state('nul', style({
        transform: 'translateX(100px)'
      })),
      state('click', style({
        transform: 'translateY(-100px)'
      })),
      transition('nul <=> click', animate(500)),

    ])
  ]
})
export class DetailComponent implements OnInit, OnChanges {
  @Input() rname = "Dosa";
  state = 'nul';
  x = false;
  ss = "ss";

  constructor(private service: BasicServiceService) {
    this.service.clickedR.subscribe(
      () => {
        if (this.x == false) {
          this.x = true
        }
        else {
          this.x = false;
          setTimeout(() => {
            this.x = true;
          }, 600);
        }
      }
    );
  }

  store() {
    alert(this.rname);
  }

  ngOnChanges() {

  }



  ngOnInit() {
  }

}