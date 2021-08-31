import { Component, OnInit } from '@angular/core';
import {AboutService} from "../services/AboutService";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  info:any;
  comments:any;
  commentaire={date: new Date(), comment:""};

  onAddCommentaire(value: any){

    this.aboutService.addComment(value);
    this.comments=this.aboutService.getAllComments();
    this.commentaire={date: new Date(),comment: ""}
  }
  constructor(private aboutService:AboutService) { }

  ngOnInit(): void {
    this.info=this.aboutService.getInfo();
    this.comments=this.aboutService.getAllComments();
  }

}
