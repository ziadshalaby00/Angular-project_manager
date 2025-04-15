import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-profile',
    imports: [DatePipe],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css'
})
export class ProfileComponent {
  PhotoSingup: any = null;
  EditForm: boolean = false;

  onFileSelected(event: any) {
    const file = event.target.files[0];
    
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.PhotoSingup = e.target?.result;
        console.log(this.PhotoSingup)
      };
      reader.readAsDataURL(file);
    }
  }

  opendEditForm() {
    this.EditForm = !this.EditForm
  }

  deleteAccount(account_id: number) {
    let c: boolean = confirm(`Are you sure you want to delete your account?`)
  }
}
