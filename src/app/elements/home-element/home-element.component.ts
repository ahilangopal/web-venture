import { Component, Input } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  template: `
  <div [innerHTML]="content">
  </div>
  `,
})
export class HomeElementComponent {

  @Input() html: SafeHtml;
  @Input() content = '<wv-navbar></wv-navbar>';
  @Input() data: any;
  constructor(
    public sanitizer: DomSanitizer
    ) {
      this.html = this.sanitizer.bypassSecurityTrustHtml(this.content);
      console.log(this.html);
    }

}
