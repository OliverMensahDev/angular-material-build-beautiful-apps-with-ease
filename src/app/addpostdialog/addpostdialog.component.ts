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

}
