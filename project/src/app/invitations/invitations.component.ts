import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

@Component({
    selector: 'app-invitations',
    imports: [DatePipe, CommonModule],
    templateUrl: './invitations.component.html',
    styleUrl: './invitations.component.css'
})
export class InvitationsComponent {

  invitations: any = []

  setVirtuilData() {
    for(let i=0; i<9; i++) {
      this.invitations.unshift({
        "id": i+1,
        "created_at": '2/17/2025',
        "username": 'ziad ahmed shalaby',
        "project_name": "Blog",
        "status": i<3? "accepted" : i<6 ? "rejected": "pending",
      })
    }

  }

  constructor() {
    this.setVirtuilData()
  }

  setAccept(id: number) {
    for(let item of this.invitations) {
      if(item.id === id) {
        item.status = 'accepted'
      }
    }
  }

  setReject(id: number) {
    let c: boolean = confirm(`Are you sure you want to reject this invite?`)
    if(c) {
      for(let item of this.invitations) {
        if(item.id === id) {
          item.status = 'rejected'
        }
      }
    }
  }
}