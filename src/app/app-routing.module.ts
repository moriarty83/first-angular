import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  {path: 'calculator', component: CalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
