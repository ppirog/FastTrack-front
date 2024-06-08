import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginObj: any = {
    username: "",
    password: ""
  };

  headerText: string = 'LOGIN';

  constructor(private http: HttpClient,
              private router: Router,
              private cookieService: CookieService
  ) {
  }

  ngOnInit(): void {

  }

  onLogin() {

  }

  goToRegister() {
    console.log('Login Component:');
    this.router.navigate(['/register']);
  }
}
