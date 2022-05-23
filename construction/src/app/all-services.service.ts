import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllServicesService {

  constructor(private http:HttpClient) { }

  getAoutUsInfo(){
    return this.http.get('http://localhost:3000/api/getAboutUs');
  }
  getAboutUsImages(){
    return this.http.get('http://localhost:3000/api/getAboutUs');
  }

  getMumbaiAddressData(){
    return this.http.get('http://localhost:3000/api/getAllmumbaiAdress');
  }
  getPuneAddress(){
    return this.http.get('http://localhost:3000/api/getAllpuneAddress');
  }
  getAllRegistrationData(){
    return this.http.get('http://localhost:3000/api/getAllRegisterData');
  }




}
