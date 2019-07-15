import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { EmployeesService } from 'src/services/employees.service';
import { RegisterDialogBoxComponent } from '../register-dialog-box/register-dialog-box.component';

@Component({
  selector: 'app-employees-view',
  templateUrl: './employees-view.component.html',
  styleUrls: ['./employees-view.component.scss']
})
export class EmployeesViewComponent implements OnInit {
  displayedColumns: string[] = ['emp_name', 'emp_contact', 'emp_email', 'emp_address', 'emp_state', 'emp_city', 'action'];
  /* 'emp_id', */
  employees;
  dataSource;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  employeeData: any;
  emp_name: any;
  emp_contact: any;
  emp_email: any;
  emp_address: any;
  emp_state: any;
  emp_city: any;

  constructor(private employeesService: EmployeesService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getAllEmployees();
  }
  getAllEmployees() {
    this.employeesService.getAllEmployees().subscribe(allEmployees => {
      this.employees = allEmployees;
      console.log('this.employees >>>', this.employees);
      this.dataSource = new MatTableDataSource<any>(this.employees);
      this.dataSource.paginator = this.paginator;
    });
  }

  delete(element) {
    console.log('element>>', element);
    this.employeesService.deleteEmployee(element.emp_id).subscribe(allEmployees => {
      this.getAllEmployees();
    });
  }
  registerDialog(): void {
    const dialogRef = this.dialog.open(RegisterDialogBoxComponent, {
      // width: '300px',
      data: {
        emp_name: this.emp_name,
        emp_contact: this.emp_contact,
        emp_email: this.emp_email,
        emp_address: this.emp_address,
        emp_state: this.emp_state,
        emp_city: this.emp_city
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.employeeData = result;
      // console.log('this.employeeData', this.employeeData);
      if ((this.employeeData.emp_name === undefined || this.employeeData.emp_name === null ||
        this.employeeData.emp_name === '') && (this.employeeData.emp_contact === undefined ||
          this.employeeData.emp_contact === null || this.employeeData.emp_contact === '')
        && (this.employeeData.emp_email === undefined || this.employeeData.emp_email === null ||
          this.employeeData.emp_email === '') &&
        (this.employeeData.emp_address === undefined || this.employeeData.emp_address === null ||
          this.employeeData.emp_address === '')
        && (this.employeeData.emp_state === undefined || this.employeeData.emp_state === null ||
          this.employeeData.emp_state === '')
        && (this.employeeData.emp_city === undefined || this.employeeData.emp_city === null ||
          this.employeeData.emp_city === '')) {
        alert('Fill all fields!');
      } else {
        this.saveData();
      }
    });

  }
  saveData() {
    this.employeeData.emp_contact = Number(this.employeeData.emp_contact);
    this.employeesService.saveData(this.employeeData).subscribe(employee => {
      console.log(' save employeeData >>>>>', employee);
      this.getAllEmployees();
    });
  }
}
