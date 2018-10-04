import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  public categories = {};
  public manufacturers = {};

  constructor(
    private http: HttpClient,
    public router: Router
    ) { }

  getCategories() {
    this.http.get('http://localhost:50137/service/odata/Inventory/Categories').subscribe( categories => {
      this.categories = categories;
    });
  }

  getManufacturers() {
    this.http.get('http://localhost:50137/service/odata/Inventory/Manufacturers').subscribe( manufacturers => {
      this.manufacturers = manufacturers;
    });
  }
}
