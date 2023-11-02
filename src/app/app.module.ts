import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ReferenceVariableComponent } from './reference-variable/reference-variable.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { JsonserviceComponent } from './jsonservice/jsonservice.component';
import { ApifromserverComponent } from './apifromserver/apifromserver.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ParentComponent,
    ChildComponent,
    ReferenceVariableComponent,
    TypescriptComponent,
    FileUploadComponent,
    JsonserviceComponent,
    ApifromserverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
