import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http: HttpClient) {

  }
  getDate(){
    return this.http.get('http://localhost:3000/api/getAllpuneAddress');
  }

}