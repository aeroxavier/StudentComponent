import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {
  @Output() add = new EventEmitter<any>();
  @Output() print = new EventEmitter<any>();


  studentCollection: Array<object> = [];
  studentRecord: object;
  @Input() studNo: number;
  @Input() studFname: string;
  @Input() studLname: string;
  @Input() studProg: string;
  @Input() studYr: number;

  messages = '';
  printing = false;

  
  private checkPatterns(value: any, pattern: RegExp): boolean{
    if(pattern.test(value)){
      return true;
    }
    else{
      return false;
    }
  }
  
  addStudentEntry(): Boolean{
    console.log(this.studNo);
    this.printing = false;
    const stringPattern = /^[A-z\s]+$/;
    const studNumberPattern = /^[0-9]+$/;
    const studYearPattern = /^[1-5]+$/;

    if(this.checkPatterns(this.studNo, studNumberPattern) &&
      this.checkPatterns(this.studFname, stringPattern) &&
      this.checkPatterns(this.studLname, stringPattern) &&
      this.checkPatterns(this.studProg, stringPattern) &&
      this.checkPatterns(this.studYr, studYearPattern)){
        
      this.studentRecord = {
        studNumber: this.studNo,
        studFirstName: this.studFname,
        studLastName: this.studLname,
        studProgram: this.studProg,
        studYear: this.studYr
      };
      this.studentCollection.push(this.studentRecord);
      this.messages = null;
      this.clearValues();
    } 
    else{
      this.messages = 'Errors have been encountered and therefore cannot continue to process requested opreation.';
      return false;
    }
  }
  clearValues(): void{
      this.studNo = null;
      this.studFname = null;
      this.studLname = null;
      this.studProg = null;
      this.studYr = null;
  }
    ngOnInit() {
  }
}
