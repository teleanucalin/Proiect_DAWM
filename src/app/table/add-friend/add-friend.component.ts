import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Friend } from '../../models/Friend';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css'],
})
export class AddFriendComponent implements OnInit {
  newFriend: Friend = {
    id: 0,
    name: '',
    lastname: '',
    city: '',
    email: '',
    dateofbirth: '',
  };

  constructor(public dialogRef: MatDialogRef<AddFriendComponent>) {}

  ngOnInit(): void {}

  add() {
    this.dialogRef.close(this.newFriend);
  }

  cancel() {
    this.dialogRef.close();
  }
}
