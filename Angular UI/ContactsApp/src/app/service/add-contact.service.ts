import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddContactService {

  constructor(private http: HttpClient) { }

  public addContactFromRemote(userId, userPassword){
    return this.http.post<any[]>(`http://localhost:8080/contactApp/login`,userId,userPassword);
  }
}
