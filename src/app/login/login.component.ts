import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public messg: string;

  constructor(private _auth: AuthService, public router: Router) { }

  ngOnInit(): void {
    this.ResetMessg();
  }

  public ResetMessg(): void{
    this.messg = 'Log In:';
  }

  public Login(info: { login: string, password: string }) {
    this._auth.login(JSON.parse(JSON.stringify(info))).subscribe(
      status =>
      {
        if (status == 200)
        {
          this.messg = 'Success';
          this.router.navigate(['/admin']);
        }
        else if (status == 401) {
          this.messg = 'Wrong login/password';
 }
        else {
          this.messg = `Something went wrong (${status})`;
 }
      });
 }

}
