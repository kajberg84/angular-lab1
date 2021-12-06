import { Component } from '@angular/core';
import { KossaService } from 'src/app/kossa.service';

@Component({
  selector: 'app-typescriptinfo',
  templateUrl: './typescriptinfo.component.html',
  styleUrls: ['./typescriptinfo.component.scss'],
})
export class TypescriptinfoComponent {
  constructor(private kossa: KossaService) {}

  getHeader(value: number) {
    let heading = this.kossa.getHeadings();
    return heading[value];
  }
}
