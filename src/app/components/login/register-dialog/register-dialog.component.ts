import { Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RegisterDialogComponent>,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
      this.dialogRef.close();
      this.router.navigate(['../registrarcliente'])
  }
}
