import { Component, OnInit } from '@angular/core';
import {JsonserviceService} from '../jsonservice.service';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-jsonservice',
  templateUrl: './jsonservice.component.html',
  styleUrls: ['./jsonservice.component.css']
})
export class JsonserviceComponent implements OnInit {

  constructor(public json:JsonserviceService,public http:HttpClient) { }

  public jsonoutput:any;

  ngOnInit(): void {

    this.jsonoutput=this.json.tableData;

    console.log("json output",this.jsonoutput);

   
   
  }

  getjson(string:any){
   
    
   
  }

  

}
