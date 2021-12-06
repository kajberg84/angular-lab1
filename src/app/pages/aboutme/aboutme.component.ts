import { Component } from '@angular/core';
import { KossaService } from 'src/app/kossa.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss'],
})
export class AboutmeComponent {
  constructor(private kossa: KossaService) {}

  getHeader(value: number) {
    let heading = this.kossa.getHeadings();
    return heading[value];
  }
}
