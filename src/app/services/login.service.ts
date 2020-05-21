import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:8030/api/seguridad';

  login(loginPayload) {
    const headers = {
      'Authorization': 'Basic ' + btoa('angular:12345'),
      'Content-type': 'application/x-www-form-urlencoded'
    }
    return this.http.post(this.baseUrl + '/oauth/token', loginPayload, {headers});
  }

}
