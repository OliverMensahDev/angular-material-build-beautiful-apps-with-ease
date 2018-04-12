import { Component, EventEmitter} from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {AddpostdialogComponent} from '../../app/addpostdialog/addpostdialog.component';
import {MatDialog} from '@angular/material'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {

  constructor(public auth: AuthService, public dialog: MatDialog ) {
    auth.handleAuthentication();
   }

   displayedColumns = ['position', 'title', 'category', 'date_posted'];
   dataSource = ELEMENT_DATA;

   openDialog(): void {
    let dialogRef = this.dialog.open(AddpostdialogComponent, {
      width: '600px', 
      data: 'Add Post'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  
   
  }

  export interface Post {
    title: string;
    category: string;
    date_posted: string;
    position: number

  }
  
  const ELEMENT_DATA: Post[] = [
    {position: 1,  title: "Post One", category:"Web Development", date_posted: "10th January, 2018"},
    {position: 2,  title: "Post Two", category:"Android Development", date_posted: "11th January, 2018"},
    {position: 3,  title: "Post Three", category:"IOS Development", date_posted: "11th January, 2018"},
    {position: 4,  title: "Post Four", category:"Android Development", date_posted: "11th January, 2018"},
    {position: 5,  title: "Post Five", category:"IOS Development", date_posted: "11th January, 2018"},
    {position: 6,  title: "Post Six", category:"Web Development", date_posted: "11th January, 2018"},
  ];

