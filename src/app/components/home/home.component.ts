import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import * as Showdown from 'showdown';


@Component({
  selector: 'wv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeContent: SafeHtml;
  converter;
  constructor(
    activatedRoute: ActivatedRoute,
    public router: Router,
    public sanitizer: DomSanitizer
    ) {
      this.converter = new Showdown.Converter();
      this.homeContent = this.sanitizer.
      bypassSecurityTrustHtml(('<app-home content="<wv-navbar></wv-navbar>"></app-home>'));
    }

  ngOnInit() {
  }

}
