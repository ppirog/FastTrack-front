import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    NgIf
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerObj: any = {
    username: "someUser",
    password: "somePassword"
  };
  loginObj: any = {
    username: "someUser",
    password: "somePassword"
  };

  headerText: string = 'LOGIN';
  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {
  }
  goBackToLogin() {
    console.log('Register Component:');
    this.router.navigate(['/login']);
  }

  onLogin() {

  }
}
