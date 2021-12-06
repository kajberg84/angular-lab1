import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KossaService {
  constructor() {}

  headings = [
    'Kaj Berg',
    'Kort förklaring över angulars struktur',
    'En laborationssida i angular',
    'Vad är Single Page Application (SPA)?',
    'Vad är TypeScript och varför använda det?',
  ];

  getHeadings() {
    return [...this.headings];
  }
}
