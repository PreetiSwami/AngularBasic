import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ReferenceVariableComponent } from './reference-variable/reference-variable.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { JsonserviceComponent } from './jsonservice/jsonservice.component';
import { ApifromserverComponent } from './apifromserver/apifromserver.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"Parent",component:ParentComponent},
  {path:"child",component:ChildComponent},
  {path:"refVar",component:ReferenceVariableComponent},
  {path:"typescript",component:TypescriptComponent},
  {path:"fileupload",component:FileUploadComponent},
  {path:"jsonservice",component:JsonserviceComponent},
  {path:"apiserver",component:ApifromserverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
