import { Component } from '@angular/core';
import { KossaService } from 'src/app/kossa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private kossa: KossaService) {}

  getHeader(value: number) {
    let heading = this.kossa.getHeadings();
    return heading[value];
  }
}
