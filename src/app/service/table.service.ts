import { Injectable } from '@angular/core';
import { Friend } from '../models/Friend';

@Injectable({
  providedIn: 'root'
})

export class TableService {
  friends:Friend[]=[
    {
    id:1,
    name:"John",
    lastname:"Doe",
    city:"Brasov",
    email:"john@gmail.com",
    dateofbirth: "1999-03-01"
  },
  {
    id:2,
    name:"Alex",
    lastname:"Bran",
    city:"Brasov",
    email:"alex3332@gmail.com",
    dateofbirth: "2001-01-09"
  },
  {
    id:3,
    name:"Paul",
    lastname:"Pauling",
    city:"Bucharest",
    email:"paul.paul@gmail.com",
    dateofbirth: "1989-05-04"
  },
  {
    id:4,
    name:"Stephen",
    lastname:"Adam",
    city:"Constanta",
    email:"a.steph@gmail.com",
    dateofbirth: "2003-01-04"
  }
];

  constructor() { }

  getAllFriends():Friend[]{
    return this.friends;
  }

  updateFriend(Friend:Friend){
    let FriendToUpdate=this.friends.find(x=>x.id==Friend.id);
    FriendToUpdate=Friend;
  }
  addFriend(friend: Friend) {
    this.friends.push(friend);
  }
  deleteFriend(index: number) {
    this.friends.splice(index, 1);
  }

}
