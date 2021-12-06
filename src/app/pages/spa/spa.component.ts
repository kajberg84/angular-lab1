import { Component } from '@angular/core';
import { KossaService } from 'src/app/kossa.service';

@Component({
  selector: 'app-spa',
  templateUrl: './spa.component.html',
  styleUrls: ['./spa.component.scss'],
})
export class SpaComponent {
  constructor(private kossa: KossaService) {}

  getHeader(value: number) {
    let heading = this.kossa.getHeadings();
    return heading[value];
  }
}
