import { Component, Inject, EventEmitter, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css']
})
export class PostDialogComponent {
  submitData = {
    title: "",
    body: "",
    category: ""
  };

  public event: EventEmitter<any> = new EventEmitter();
  constructor(
    public dialogRef: MatDialogRef<PostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dataService: DataService
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(event): void {
    this.submitData.title = event.target.elements.title.value;
    this.submitData.body = event.target.elements.body.value;
    console.log(this.submitData);
    //this.submitData.category =  event.target.elements.category.value;
    console.log(event.target.elements)
    this.event.emit({ data: this.submitData });
    this.dialogRef.close();
    event.preventDefault();
  }

  categories = this.dataService.getCategories();

}
