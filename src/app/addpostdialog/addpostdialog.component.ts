import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-addpostdialog',
  templateUrl: './addpostdialog.component.html',
  styleUrls: ['./addpostdialog.component.css']
})
export class AddpostdialogComponent  {

  constructor(
    public dialogRef: MatDialogRef<AddpostdialogComponent>,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  category = [
    {value: 'Web-Development', viewValue: 'Web Development'},
    {value: 'Android-Development', viewValue: 'Anfroid Development'},
    {value: 'IOS-Development', viewValue: 'IOS Development'}
  ];

}
