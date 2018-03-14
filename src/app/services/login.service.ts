import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  constructor(
    private router: Router
  ) { }

  login(username, password) {
    if (username === 'admin' && password === '123456') {
      localStorage.setItem('username', username)
      this.router.navigate(['home'])
    } else {
      alert('用户名或密码错误')
    }
  }

  isLogin() {
    if (localStorage.getItem('username')) {
      return true
    } else {
      return false
    }
  }

}
