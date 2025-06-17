import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  setBaseUrl(url: string) {
    this.baseUrl = url;
  }

  get<T>(endpoint: string, params?: any, headers?: HttpHeaders): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${endpoint}`, {
      params: params ? new HttpParams({ fromObject: params }) : undefined,
      headers,
    });
  }

  post<T>(endpoint: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}${endpoint}`, body, { headers });
  }

  put<T>(endpoint: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}${endpoint}`, body, { headers });
  }

  delete<T>(endpoint: string, params?: any, headers?: HttpHeaders): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}${endpoint}`, {
      params: params ? new HttpParams({ fromObject: params }) : undefined,
      headers,
    });
  }
}
