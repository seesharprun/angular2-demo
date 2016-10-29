import {Component} from '@angular/core';
import {ItemComponent} from './item.component';

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  directives:  [
    ItemComponent
  ]
})
export class AppComponent { 
  newItem:string = "test";
  items:string[] = [ "Item 1", "Item 2" ];
  addNewItem() {
    this.items.push(this.newItem);
    this.newItem = "";
  }
}