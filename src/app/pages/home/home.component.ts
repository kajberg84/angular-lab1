import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  welcome = 'Välkomna';
  currentName = null;
  names = [
    {first: 'Kaj'},
    {first: 'Tor'},
    {first: 'Freja'},
    {first: 'Lina'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  selectName(name: any): void {
   console.log('selected name: ', name);
    this.currentName = name;
  } 
}

