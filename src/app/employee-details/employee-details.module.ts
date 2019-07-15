import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDetailsRoutingModule } from './employee-details-routing.module';
import { EmployeesViewComponent } from './employees-view/employees-view.component';
import { MatTableModule, MatPaginatorModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { RegisterDialogBoxComponent } from './register-dialog-box/register-dialog-box.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [EmployeesViewComponent, RegisterDialogBoxComponent],
  imports: [
    CommonModule,
    EmployeeDetailsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule, MatFormFieldModule,
    FormsModule,
    MatInputModule,

  ],
  entryComponents: [RegisterDialogBoxComponent]
})
export class EmployeeDetailsModule { }
