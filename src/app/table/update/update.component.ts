import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Friend } from '../../models/Friend';
import { TableService } from '../../service/table.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  friend: Friend = { id: 0, name: '', lastname: '', city: '', email: '', dateofbirth: '' };

  constructor(@Inject(MAT_DIALOG_DATA) public data: Friend, private service: TableService, private dialogRef: MatDialogRef<UpdateComponent>) {}

  ngOnInit(): void {
    this.friend = { ...this.data };
  }

  editFriend() {
    this.data.name = this.friend.name;
    this.data.lastname = this.friend.lastname;
    this.data.city = this.friend.city;
    this.data.email = this.friend.email;
    this.data.dateofbirth = this.friend.dateofbirth;

    this.service.updateFriend(this.data);
    this.dialogRef.close();
  }
}
