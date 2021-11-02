import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'kaj-angular';
  links = [
    {path: '/home', icon: 'home', title: 'home'},
    {path: '/aboutme', icon: 'aboutme', title: 'About me'}
  ];

  constructor(){};

}
