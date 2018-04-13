import { Component, EventEmitter } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';
import { MatDialog } from '@angular/material';
import { DataService } from '../data/data.service';
import { Post } from '../models/Post';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  constructor(public auth: AuthService, public dialog: MatDialog, public data: DataService) {
    auth.handleAuthentication();
  }

  displayedColumns = ['position', 'title', 'category', 'date_posted', 'body'];
  dataSource = this.data.getData();

  openDialog(): void {
    let dialogRef = this.dialog.open(PostDialogComponent, {
      width: '600px',
      data: 'Add Post'
    });
    dialogRef.componentInstance.event.subscribe((result)=> {
      this.dataSource = this.data.addPost(result.data)
      console.log(this.dataSource)
    })
  }
}
