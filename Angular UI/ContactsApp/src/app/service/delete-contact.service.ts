import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteContactService {

  constructor(private http: HttpClient) { }

  public deleteContactFromRemote(userId, userPassword){
    return this.http.post<any>(`http://localhost:8080/contactApp/login`,userId,userPassword);
  }

}
