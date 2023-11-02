import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  currentItem = 'Television';

  
  


  items = ['item1', 'item2', 'item3', 'item4'];


  addItem(newItem: string) {
    this.items.push(newItem);
  }
  ngOnInit(): void {
  }

}
