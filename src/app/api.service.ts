import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apiservice:HttpClient) { }
  
  postClient(data:any){
    return this.apiservice.post<any>("http://localhost:3000/posts",data)
    .pipe(map((res:any)=>{return res;}))
  }
  getAllClient(){
    return this.apiservice.get<any>("http://localhost:3000/posts")
    .pipe(map((res:any)=>{return res;}))
 }
}
