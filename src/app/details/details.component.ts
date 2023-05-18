import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Friend } from '../models/Friend';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public friend: Friend, private dialogRef:MatDialogRef<Friend>) {}

  cancel() {
    this.dialogRef.close();
  }
}