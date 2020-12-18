import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditContactService {

  constructor(private http: HttpClient) { }

  public EditContactFromRemote(userId, userPassword){
    return this.http.post<any>(`http://localhost:8080/contactApp/editProfile`,userId,userPassword);
  }

}
