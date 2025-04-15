import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
    selector: 'app-navbar',
    imports: [RouterModule, CommonModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private authService: AuthServiceService, private router: Router) {}
  
  userLoggedIn: boolean = false;

  ngOnInit() {
    this.authService.userLoggedIn$.subscribe((isLoggedIn) => {
      this.userLoggedIn = isLoggedIn;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/'])
  }

  SideNav: boolean = true
  UserMenu: boolean = false

  toggleSideNav() {
    this.SideNav = !this.SideNav
    console.log(this.SideNav)
  }
  toggleUserMenu() {
    this.UserMenu = !this.UserMenu
    console.log(this.UserMenu)
  }

  Notfications: number = 3
  resetNotfications() {
    this.Notfications = 0;
  }
}
