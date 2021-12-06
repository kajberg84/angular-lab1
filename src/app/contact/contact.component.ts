import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  userInput = {
    email: '',
    message: '',
  };

  userMessages = [];

  onSubmit() {
    console.log(this.userInput);
  }
}
