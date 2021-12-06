import { Component } from '@angular/core';
import { KossaService } from 'src/app/kossa.service';

@Component({
  selector: 'app-angularinfo',
  templateUrl: './angularinfo.component.html',
  styleUrls: ['./angularinfo.component.scss'],
})
export class AngularinfoComponent {
  constructor(private kossa: KossaService) {}

  getHeader(value: number) {
    let heading = this.kossa.getHeadings();
    return heading[value];
  }
}
