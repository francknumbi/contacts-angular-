import {Injectable} from "@angular/core";

@Injectable()

export class AboutService{
  info={
    name:"franck",
    email:"17na408@esisalama.org",
    tel:"0972189408"
  }
  comments=[
    {date:new Date(), comment:"A"},
    {date:new Date(), comment:"B"},
    {date:new Date(), comment:"C"},
  ];

  addComment(c:any){
    c.date= new Date();
    this.comments.push(c);
  };

  getInfo(){
    return this.info;
  }

  getAllComments(){
    return this.comments;
  }

}
