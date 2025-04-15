import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-login',
    imports: [RouterModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthServiceService) {}

  login() {
    this.authService.login();
    this.router.navigate(['/Projects'])
  }
}
