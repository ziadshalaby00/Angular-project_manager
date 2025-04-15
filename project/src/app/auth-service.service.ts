import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private userLoggedIn = new BehaviorSubject<boolean>(false); // الحالة الافتراضية: غير مسجل
  userLoggedIn$ = this.userLoggedIn.asObservable(); // جعلها قابلة للاشتراك من قبل المكونات

  constructor() {}

  login() {
    this.userLoggedIn.next(true); // تغيير الحالة إلى "مسجل الدخول"
  }

  logout() {
    this.userLoggedIn.next(false); // تغيير الحالة إلى "غير مسجل"
  }

  isLoggedIn(): boolean {
    return this.userLoggedIn.getValue(); // إرجاع الحالة الحالية
  }
}
