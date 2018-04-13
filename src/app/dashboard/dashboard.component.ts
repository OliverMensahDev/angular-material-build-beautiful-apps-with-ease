import { Component, EventEmitter } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';
import { MatDialog } from '@angular/material';
import { DataService } from '../data/data.service';
import { Post } from '../models/Post';
import { DataSource } from '@angular/cdk/table';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  constructor(public auth: AuthService, public dialog: MatDialog, private dataService: DataService) {
    auth.handleAuthentication();
  }

  displayedColumns = ['position', 'title', 'category', 'date_posted', 'body'];
  dataSource = new PostDataSource(this.dataService);

  openDialog(): void {
    let dialogRef = this.dialog.open(PostDialogComponent, {
      width: '600px',
      data: 'Add Post'
    });
    dialogRef.componentInstance.event.subscribe((result)=> {
      this.dataService.addPost(result.data)
      this.dataSource = new PostDataSource(this.dataService);
    })
  }
}

export class PostDataSource extends DataSource<any>{
  constructor(private dataService: DataService){
    super();
  }
  connect(): Observable<Post[]>{
    return this.dataService.getData();
  }
  disconnect(){}
}
