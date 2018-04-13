import { Component, Inject, EventEmitter, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css']
})
export class PostDialogComponent {
  blogPost = {
    title: "",
    body: "",
    category: "",
  };

  public event: EventEmitter<any> = new EventEmitter();
  constructor(
    public dialogRef: MatDialogRef<PostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    // this.submitData.title = event.target.elements.title.value;
    // this.submitData.body = event.target.elements.body.value;
    // console.log(this.submitData);
    // this.submitData.category =  event.target.elements.category.value;
    // console.log(event.target.elements)
    // this.event.emit({ data: this.submitData });
    console.log(this.blogPost);
    this.dialogRef.close();
    event.preventDefault();
  }

  categories = [
    { value: 'Web-Development', viewValue: 'Web Development' },
    { value: 'Android-Development', viewValue: 'Android Development' },
    { value: 'IOS-Development', viewValue: 'IOS Development' }
  ];

}
