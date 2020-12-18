import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http: HttpClient) { }

  public logoutUserFromRemote(){
    return this.http.get<any[]>(`http://localhost:8080/contactApp/logout`);
  }
}
