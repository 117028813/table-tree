import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { LoginService } from './login.service';

@Injectable()
export class LoginGuardService implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  canActivate() {
    if (this.loginService.isLogin()) {
      return true
    } else {
      this.router.navigate(['login'])
      return false
    }
  }

}
