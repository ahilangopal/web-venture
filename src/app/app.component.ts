import { Component, Injector, OnInit } from '@angular/core';
import { HomeElementComponent } from './elements';

import { createCustomElement} from '@angular/elements';

@Component({
  selector: 'wv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  title = 'web-venture';

  constructor(private injector: Injector) {

  }

  ngOnInit() {
    const elem = createCustomElement(HomeElementComponent, { injector : this.injector });
    customElements.define('app-home', elem);
  }
}

