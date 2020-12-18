import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {

  constructor(private http: HttpClient) { }

  public EditProfileFromRemote(userId, userPassword){
    return this.http.post<any>(`http://localhost:8080/contactApp/login`,userId,userPassword);
  }

}
