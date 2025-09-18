import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BanerService {
  private baseUrl = 'http://127.0.0.1:8000/api/';
  constructor(private http: HttpClient) { }

  bannerPost(fromData: any): any {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.post(`${this.baseUrl}banner/store`, fromData, { headers })
  }
}
