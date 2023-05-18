import { Component, OnInit } from '@angular/core';
import { Friend } from '../models/Friend';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from './update/update.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { DetailsComponent } from '../details/details.component';
import { TableService } from '../service/table.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  friends: Friend[] = [];
  searchQuery: string = '';
  sortField: keyof Friend | '' = '';
  sortAscending: boolean = true;
  filteredFriends: Friend[] = [];

  constructor(private friendService: TableService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.friends = this.friendService.getAllFriends();
    this.filteredFriends = this.friends;
  }

  filterFriends(): void {
    const query = this.searchQuery.toLowerCase();

    this.filteredFriends = this.friends.filter((friend: Friend) => {
      const nameMatch = friend.name.toLowerCase().includes(query);
      const lastNameMatch = friend.lastname.toLowerCase().includes(query);
      const cityMatch = friend.city.toLowerCase().includes(query);
      const emailMatch = friend.email.toLowerCase().includes(query);
      const dateOfBirthMatch = friend.dateofbirth.toLowerCase().includes(query);

      return nameMatch || lastNameMatch || cityMatch || emailMatch || dateOfBirthMatch;
    });
  }

  sortTable(field: keyof Friend) {
    if (this.sortField === field) {
      this.sortAscending = !this.sortAscending;
    } else {
      this.sortField = field;
      this.sortAscending = true;
    }

    // Perform sorting logic on the friends array based on the sortField and sortAscending values
    this.friends.sort((a, b) => {
      const valueA = a[field];
      const valueB = b[field];

      if (valueA < valueB) {
        return this.sortAscending ? -1 : 1;
      } else if (valueA > valueB) {
        return this.sortAscending ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
  addFriend() {
    const dialogRef = this.dialog.open(AddFriendComponent, { data: { title: 'Add Friend' } });
  
    dialogRef.afterClosed().subscribe((newFriend: Friend) => {
      if (newFriend) {
        // Perform form validation
        if (newFriend.name && newFriend.lastname && newFriend.city && newFriend.email && newFriend.dateofbirth) {
          // All fields are valid, assign an ID and add the friend
          newFriend.id = this.friends.length + 1;
          this.friends.push(newFriend);
        } else {
          // Show validation error messages or handle invalid form data
          console.log('Please fill in all the fields.');
        }
      }
    });
  }
  
  updateFriend(friend: Friend) {
    const dialogRef = this.dialog.open(UpdateComponent, { data: friend });
    this.friends = [...this.friends];
  }

  deleteFriend(friend: Friend) {
    const index = this.friends.findIndex(f => f.id === friend.id);
    if (index !== -1) {
      this.friends.splice(index, 1);
    }
  }

  openDetails(friend: Friend) {
    const dialogRef = this.dialog.open(DetailsComponent, {
      data: friend,
      width: '500px' // Set the width of the dialog according to your preference
    });
  
    dialogRef.afterClosed().subscribe(result => {
      // Handle any actions or updates after the details dialog is closed
    });
  }
  
}
