import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareserviceService {

  constructor(private http:HttpClient) {
  
   }
getdata()
{
  return this.http.get('http://localhost:3000/api/getAllpuneAddress');
}
getdata2()
{
 return this.http.get('http://localhost:3000/api/getAllmumbaiAdress');
}
}
