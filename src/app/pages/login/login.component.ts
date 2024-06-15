import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {catchError, throwError} from "rxjs";

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
export class LoginComponent implements OnInit {

  loginObj: any = {
    username: "",
    password: ""
  };
  url = 'http://localhost:8080';
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

  constructor(private http: HttpClient,
              private router: Router
  ) {
  }

  ngOnInit(): void {

  }

  onLogin() {
    this.http.post(this.url + '/login', this.loginObj, {headers: this.headers})
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            alert('Błedne Dane');
          }
          return throwError(error);
        })
      )
      .subscribe(
      (response: any) => {
        if ('token' in response && response.token) {
          sessionStorage.setItem('token', response.token)
          console.log('Token:', response.token);
          alert('Zalogowano pomyślnie!');
          this.router.navigate(['/dashboard']);
        } else {
          console.error('Błąd token:', response);
        }
      },
      (tokenError) => {
        console.error('Błąd login:', tokenError);
      }
    );
  }

  goToRegister() {
    console.log('Login Component:');
    this.router.navigate(['/register']);
  }
}
