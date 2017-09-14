import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'list-entry',
  templateUrl: './list-entry.component.html',
  styleUrls: ['./list-entry.component.css']
})
export class ListEntryComponent implements OnInit {
  @Input() studentCollection: Array<object> = [];
  @Input() printing: boolean;

  listStudents(): void{
    this.printing = true;
    console.log('Showing student collection');
  }
  constructor() {
    
   }

  ngOnInit() {
  }

}
