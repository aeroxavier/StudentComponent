import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  studentRecord: {}
  studentCollection: Array<object> = [];
  printing = false;
  setStudentInfo(event): void{
    this.studentRecord = event;
    this.studentCollection.push(this.studentRecord);
  }
  setPrinting(event): void{
    this.printing = event;
  }
}


