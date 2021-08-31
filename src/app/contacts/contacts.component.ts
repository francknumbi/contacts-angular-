import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contact={
    name:'franck',
    email:'17na408@gmail.com'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
