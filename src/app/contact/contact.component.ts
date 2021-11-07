import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  userInput = {
    email: '',
    message: ''
  }

onSubmit(){
  // Om jag skulle orka så fixa en mongodb o fixa persistence.
  console.log(this.userInput);
}
}
