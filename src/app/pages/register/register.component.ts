import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
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
    username: "",
    password: ""
  };

  url = 'http://localhost:8080';

  headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  goBackToLogin() {
    console.log('Register Component:');
    this.router.navigate(['/login']);
  }

  onRegister() {

    this.http.post(this.url + '/register', this.registerObj, {headers: this.headers}).subscribe(
      (response) => {
        console.log('Udane rejestracji:', response);
      },
      (error) => {
        console.error('Błąd rejestracji:', error);
      }
    );
  }
}
