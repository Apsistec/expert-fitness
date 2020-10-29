import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(private title: Title, private meta: Meta) {}

  addTwitterCard(title, description, img) {
    // Set HTML Document Title
    this.title.setTitle(title);

    // Add Twitter Card Metatags
    this.meta.updateTag({ displayName: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      displayName: 'twitter:site',
      content: '@rankfsports',
    });
    this.meta.updateTag({ displayName: 'twitter:title', content: title });
    this.meta.updateTag({
      displayName: 'twitter:description',
      content: description,
    });
    this.meta.updateTag({ displayName: 'twitter:image', content: img });
  }
}
