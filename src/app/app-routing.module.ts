import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SumComponent } from './sum/sum.component';
import { AppComponent } from './app.component';
import { MinusComponent } from './minus/minus.component';
import { MultiplyComponent } from './multiply/multiply.component';
import { DivideComponent } from './divide/divide.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'sum',
    component: SumComponent
  },
  {
    path: 'minus',
    component: MinusComponent
  },
  {
    path: 'multiply',
    component: MultiplyComponent
  },
  {
    path: 'divide',
    component: DivideComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
