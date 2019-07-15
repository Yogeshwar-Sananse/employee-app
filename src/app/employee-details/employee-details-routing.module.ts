import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesViewComponent } from './employees-view/employees-view.component';


const routes: Routes = [
  {
    path: '',
    component: EmployeesViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeDetailsRoutingModule { }
