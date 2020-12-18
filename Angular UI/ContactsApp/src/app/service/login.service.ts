import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public loginUserFromRemote(userId, userPassword){
    return this.http.post<any>(`http://localhost:8080/contactApp/login`,userId,userPassword);
  }

  
}
