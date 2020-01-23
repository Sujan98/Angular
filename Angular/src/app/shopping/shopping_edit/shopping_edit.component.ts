import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ShoppingComponent } from '../shopping.component';
import { Shop } from '../../shop.model';

@Component({
  selector: 'app-edit',
  templateUrl: './shopping_edit.component.html',
  styleUrls: ['./shopping_edit.component.css']
})
export class EditComponent implements OnInit {
  name: string;
  amount: number;
  server = false;
  @Output() add = new EventEmitter<{ name: string, amount: number }>();
  @Output() delete = new EventEmitter();
  @Output() clear = new EventEmitter();

  constructor() {
  }

  addItem() {
    this.add.emit({
      name: this.name,
      amount: this.amount
    });
  }

  deleteItem() {
    this.delete.emit();
  }

  clearItem() {
    this.clear.emit();
  }

  ngOnInit() {
  }

}
