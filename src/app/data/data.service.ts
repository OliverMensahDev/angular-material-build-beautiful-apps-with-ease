import { Injectable } from '@angular/core';
import {Post} from '../models/Post'
@Injectable()
export class DataService {
  
  ELEMENT_DATA: Post[] = [
    {position: 1,  title: "Post One", category:"Web Development", date_posted: "10th January, 2018"},
    {position: 2,  title: "Post Two", category:"Android Development", date_posted: "11th January, 2018"},
    {position: 3,  title: "Post Three", category:"IOS Development", date_posted: "11th January, 2018"},
    {position: 4,  title: "Post Four", category:"Android Development", date_posted: "11th January, 2018"},
    {position: 5,  title: "Post Five", category:"IOS Development", date_posted: "11th January, 2018"},
    {position: 6,  title: "Post Six", category:"Web Development", date_posted: "11th January, 2018"},
  ];
  constructor() { }

  getData() : Post[]{
    return this.ELEMENT_DATA;
  }


}
