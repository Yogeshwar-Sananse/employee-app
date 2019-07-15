import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-register-dialog-box',
  templateUrl: './register-dialog-box.component.html',
  styleUrls: ['./register-dialog-box.component.scss']
})
export class RegisterDialogBoxComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RegisterDialogBoxComponent>, @Inject(MAT_DIALOG_DATA) public employeeData: any) { }

  ngOnInit() {
  }
  cancel(): void {
    this.dialogRef.close();
  }

}
