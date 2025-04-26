import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  loginApi(fromData: any): any {
    return this.http.post(`${this.baseUrl}admin/login`, fromData);
  }
}
