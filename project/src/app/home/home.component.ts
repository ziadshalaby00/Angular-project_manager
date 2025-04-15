import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
    selector: 'app-home',
    imports: [RouterModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

  userLoggedIn: boolean = false;

  constructor(private authService: AuthServiceService, private router: Router) {}

  ngOnInit() {
    this.authService.userLoggedIn$.subscribe((isLoggedIn) => {
      this.userLoggedIn = isLoggedIn;
    });
    if (this.userLoggedIn) {
      this.router.navigate(['/Projects']);
    }
  }
}
