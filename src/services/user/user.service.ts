import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private registerAPIURL = 'http://localhost:3000/users/register';

  private logInAPIURL = 'http://localhost:3000/users/log-in';

  constructor(private httpClient: HttpClient) {}

  registerUser(user: any) {
    return this.httpClient.post<any>(this.registerAPIURL, user);
  }

  logInUser(data: any) {
    return this.httpClient.post(`${this.logInAPIURL}/log-in`, data);
  }
}

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = '/api'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const formData = { email, password };
    return this.http.post(`${this.apiUrl}/login`, formData);
  }
}
