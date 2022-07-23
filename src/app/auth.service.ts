import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  accessToken = 'aaaabbbbccccddddeeeeffffgggg';

  constructor() {}

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('access-token');
  }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      sessionStorage.setItem('access-token', this.accessToken);
      return true;
    }

    return false;
  }

  logout() {
    sessionStorage.clear();
  }
}
