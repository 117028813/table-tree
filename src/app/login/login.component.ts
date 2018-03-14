import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    username: '',
    password: ''
  }

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    const {username, password} = this.user
    this.loginService.login(username, password)
  }

}
