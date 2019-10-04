import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  email: string;
  message: string;

  constructor() { }

  ngOnInit() {
  }

  processForm() {
    alert(`My email is ${this.email} and the message is ${this.message}`);
  }

}
