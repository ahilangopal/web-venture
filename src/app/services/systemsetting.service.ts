import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SystemSettingService {

  public systemConfig = {};
  public pageConfig = {};
  public languages = {};


  constructor(
    private http: HttpClient,
    public router: Router
    ) { }


    getSystemSettings() {
      this.http.get('http://localhost:50137/service/rcp/SystemRest/GetSystemSettings').subscribe( systemConfig => {
        this.http.get('http://localhost:50137/service/rcp/SystemRest/Parameters').subscribe(paramsData  => {
          this.systemConfig = Object.assign({}, systemConfig, paramsData);
            this.http.get('http://localhost:50137/service/rcp/SystemRest/GetInventoryDetailPageSetup').subscribe( pageConfig => {
              this.pageConfig = pageConfig;
                this.http.get('http://localhost:50137/service/rcp/SystemRest/Languages').subscribe( languages => {
                  this.languages = languages;
                });
            });
        });
      });
    }

    getPageSetup() {
      this.http.get('http://localhost:50137/service/rcp/SystemRest/GetSystemSettings').subscribe( pageConfig => {
        this.pageConfig = pageConfig;
      });
    }

    getLanguage() {
      this.http.get('http://localhost:50137/service/rcp/SystemRest/Languages').subscribe( languages => {
        this.languages = languages;
      });
    }

}
