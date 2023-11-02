import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class JsonserviceService {

  constructor() { }

  public tableData=[

    

      {
        'sno': "1",
        'name':"Preeti",
        'gender':"Female",
        'role':"Developer"
      },
      {
        'sno': "2",
        'name':"Pritam",
        'gender':"Male",
        'role':"Banker"
      },
      {
        'sno': "3",
        'name':"Pihu",
        'gender':"Female",
        'role':"Student"
      },
      {
        'sno': "4",
        'name':"Alisha",
        'gender':"Female",
        'role':"Writer"
      },
      {
        'sno': "5",
        'name':"Akash",
        'gender':"Male",
        'role':"Engineer"
      },
      
  
    ]
  

  
  
    

  
}
