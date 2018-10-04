import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SystemSettingService } from './systemsetting.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService  {
  constructor(
    private http: HttpClient,
    public router: Router
    ) { }

  login(username: string, password: string) {
      return this.http.post<any>(`http://localhost:50137/service/Token`, `grant_type=password&username=${username}&password=${password}`)
          .pipe(map(user => {
              // login successful if there's a jwt token in the response
              if (user && user.access_token) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', JSON.stringify(user));
              }

              return user;
          }));
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
  }
}
