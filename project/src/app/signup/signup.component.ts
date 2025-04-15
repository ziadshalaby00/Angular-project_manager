import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-signup',
    imports: [RouterModule],
    templateUrl: './signup.component.html',
    styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private router: Router, private authService: AuthServiceService) {}

  signup() {
    this.authService.login();
    this.router.navigate(['/Projects'])
  }

  PhotoSingup: any = null;

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
}
