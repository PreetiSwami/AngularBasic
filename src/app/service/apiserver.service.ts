import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiserverService {

 
  constructor(public http:HttpClient) { }

  public  baseUrl = environment.apiUrl;

  public getTableData(){
    let apiUrl = this.baseUrl + `/users`;
    return this.http.get<any>(apiUrl);
  }
}
