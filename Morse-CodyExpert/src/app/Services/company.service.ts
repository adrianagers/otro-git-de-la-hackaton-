import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../Models/Company';
import{environment}from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  apiUrl: String = environment.api_url;
  constructor(
    private http: HttpClient
  ) { }
  

  loginCompany(formData) {
    return this.http.post<Company>(`${this.apiUrl}/loginCompany`, formData)
  }
  createCompany(formData) {
    return this.http.post<Company>(`${this.apiUrl}/company/create`, formData)
  }
  getAll(){
    return this.http.get(`${this.apiUrl}/company/getAll`)
  }
}
