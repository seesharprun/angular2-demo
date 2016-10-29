import {Component, Input} from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: 'app/item.component.html',
  directives:  []
})
export class ItemComponent {
    @Input() text:string
 }