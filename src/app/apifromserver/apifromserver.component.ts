import { Component, OnInit } from '@angular/core';
import {ApiserverService} from '../service/apiserver.service'

@Component({
  selector: 'app-apifromserver',
  templateUrl: './apifromserver.component.html',
  styleUrls: ['./apifromserver.component.css']
})
export class ApifromserverComponent implements OnInit {

  public tableData:any;

  constructor(public apiservice:ApiserverService) { }

  ngOnInit(): void {

    this.apiservice.getTableData().subscribe(res =>
      {
       
        this.tableData = res;

        console.log("data from server",this.tableData)
      })

  }

}
