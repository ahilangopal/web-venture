import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  template: '<div style="margin:128px 16px;text-align:center;">Path not found.</div>'
})
export class NotfoundComponent {
  constructor(meta: Meta) {
      console.log('adding tag');
      meta.addTag({name: 'robots', content: 'noindex'});
  }
}
