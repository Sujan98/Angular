import { Injectable, Output, EventEmitter } from '@angular/core';
import { THIS_EXPR, BinaryOperator } from '@angular/compiler/src/output/output_ast';
import { Binary } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class BasicServiceService {
  formR = 0;
  x = 1;
  profile = [];
  clickedR = new EventEmitter<void>();
  RecipeAdded = new EventEmitter<string>();
  event = new EventEmitter<BinaryOperator>();
  constructor() {

  }

  onProfile(profileD) {
    this.profile = profileD;
    console.log(this.profile);
  }

  formV() {
    this.event.emit(1);
    this.formR = 1;
  }

  AddRecipe(name: string) {
    this.RecipeAdded.emit(name);
  }
  getRecipe() {
    return this.RecipeAdded;
  }

}
