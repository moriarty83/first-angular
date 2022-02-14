import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HelloworldComponent } from './helloworld/helloworld.component';

const routes: Routes = [
  {path: 'hello-component', component: HelloworldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
