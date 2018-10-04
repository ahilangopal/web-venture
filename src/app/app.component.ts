import { Component, Injector, OnInit } from '@angular/core';
import { HomeElementComponent } from './elements';

import { createCustomElement} from '@angular/elements';
import { SystemSettingService } from './services/systemsetting.service';

@Component({
  selector: 'wv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  title = 'web-venture';

  constructor(private injector: Injector, private systemSettingService: SystemSettingService) {

  }

  ngOnInit() {
    // const elem = createCustomElement(HomeElementComponent, { injector : this.injector });
    // customElements.define('app-home', elem);
    this.systemSettingService.getSystemSettings();
  }
}

