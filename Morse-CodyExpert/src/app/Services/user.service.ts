import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/User';
import{environment}from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: String = environment.api_url;
  constructor(
    private http: HttpClient
  ) { }
  login(formData){
    return this.http.post<User>(`${this.apiUrl}/login`, formData)
  }
  createUser(formData){
    return this.http.post<User>(`${this.apiUrl}/user/create`, formData);
  }
  
}
