import { Component, OnInit } from '@angular/core';
import {UploadService} from '../upload.service'

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  fileName = '';

  constructor(public uploadService:UploadService ) { }

  ngOnInit(): void {

    
  }
  

  
    // Variable to store shortLink from api response 
    shortLink: string = ""; 
    loading: boolean = false; // Flag variable 
    file:any = null; // Variable to store file 

    onChange(event:any) { 
      this.file = event.target.files[0]; 

      console.log("file",this.file)
  } 
  

  onUpload() { 
    this.loading = !this.loading; 
    console.log(this.file); 
    this.uploadService.uploadfile(this.file).subscribe( 
        (event: any) => { 
            if (typeof (event) === 'object') { 

                // Short link via api response 
                this.shortLink = event.link; 

                this.loading = false; // Flag variable  
            } 
        } 
    ); 
} 
 
 
 

}
