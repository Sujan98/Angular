import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { interval, Subscription, Observable } from 'rxjs';
import { BasicServiceService } from '../basic-service.service';
import { DetailComponent } from './recipe_detail/recipe_detail.component';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnDestroy {
  rName = '';
  Ingredients: Recipe[] = [
    new Recipe('Dosa', 'Description', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Idly', 'Description', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')];

  private privateObs: Subscription;

  @Output() rclick = new EventEmitter<void>();

  constructor(private service: BasicServiceService) {
    this.service.getRecipe().subscribe(
      name => {
        this.Ingredients.push(new Recipe(name, 'Description', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'));
        alert(name);
      }
    );
  }


  ngOnInit() {
    // this.privateObs = interval(1000).subscribe(count => {
    //   console.log(count);
    // });
    const customObs = Observable.create(observer => {
      let count = 0;
      setInterval(function () {
        observer.next(count);
        if (count > 5) {
          observer.error(new Error("Count is greater than 5!"));
        }
        count++;
      }, 1000)
    });
    this.privateObs = customObs.subscribe(count => {
      console.log(count);
    }, function (error) {
      alert(error.message);
    }
    )
  }

  ngOnDestroy(): void {
    this.privateObs.unsubscribe();
  }

  clicked(name: string) {
    this.rName = name;
    this.service.clickedR.emit();
  }

}
