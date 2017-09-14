import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-entry',
  templateUrl: './input-entry.component.html',
  styleUrls: ['./input-entry.component.css']
})
export class InputEntryComponent implements OnInit {
  studNo: number;
  studFname: string;
  studLname: string;
  studProg: string;
  studYr: number;

  studentInfo: {}

  setStudentInfo(): void {
    this.studentInfo = {
      studNo: this.studNo,
      studFname: this.studFname,
      studLname: this.studLname,
      studProg: this.studProg,
      studYr: this.studYr
    }
  }
  
  @Output() printing: EventEmitter<any> = new EventEmitter<any>();
  @Output() student: EventEmitter<any> = new EventEmitter<any>();
  print = false;
  addStudent(): void {
    this.printing.emit(this.print);
    this.student.emit(this.studentInfo);
    this.clearValues();
  }

  clearValues(): void{
      this.studNo = null;
      this.studFname = null;
      this.studLname = null;
      this.studProg = null;
      this.studYr = null;
  }
  constructor() { 
    
  }

  ngOnInit() {
  }

}
