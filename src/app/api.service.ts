import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/passwords';

  addPass(data:any){
    return this.http.post(this.url,data)
  }

  getPass(){
    return this.http.get(this.url);
  }

  deletePass(id:any){
    return this.http.delete(this.url+'/deletePass/'+id);
  }
}
