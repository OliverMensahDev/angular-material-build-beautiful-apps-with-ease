import {Component, Inject, EventEmitter, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-addpostdialog',
  templateUrl: './addpostdialog.component.html',
  styleUrls: ['./addpostdialog.component.css']
})
export class AddpostdialogComponent implements OnInit  {
  submitData = {
    title: "",
    body: "",
    category: ""
  };

  public event: EventEmitter<any> = new EventEmitter();
  constructor(
    public dialogRef: MatDialogRef<AddpostdialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) {}
  
  ngOnInit() {   

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(event): void{
    this.submitData.title = event.target.elements.title.value;
    this.submitData.body =  event.target.elements.body.value;
    //this.submitData.category =  event.target.elements.category.value;
    console.log(event)
    this.event.emit({data: this.submitData});
    this.dialogRef.close();
    event.preventDefault();    
  }

  categories = [
    {value: 'Web-Development', viewValue: 'Web Development'},
    {value: 'Android-Development', viewValue: 'Android Development'},
    {value: 'IOS-Development', viewValue: 'IOS Development'}
  ];

}
