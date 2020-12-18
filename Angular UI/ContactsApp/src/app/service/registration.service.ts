import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  public registerUserFromRemote(userId,userPassword){
      return this.http.post<any>(`http://localhost:8080/contactApp/login`,userId,userPassword);
    }
  
  }