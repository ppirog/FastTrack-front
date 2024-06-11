import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Company} from "../company.interface";
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    NgIf
  ],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {

  companyKrs: string = '';
  company: Company | null = null;
  loading: boolean = false;
  error: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {
  }

  findCompanyClick() {

    if (!this.companyKrs.trim()) {
      this.error = 'Please enter a KRS number';
      return;
    }

    let token = sessionStorage.getItem('token');
    if (!token) {
      this.error = 'No authentication token found. Please log in.';
      return;
    }

    this.loading = true;
    this.error = '';
    this.company = null;

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const apiUrl = `http://localhost:8080/company/${this.companyKrs}`;

    this.http.get<Company>(apiUrl, {headers}).subscribe({
      next: (data) => {
        this.loading = false;
        if (data) {
          this.company = data;
        } else {
          this.error = 'No company found';
        }
      },
      error: (err) => {
        this.loading = false;
        this.error = 'Error fetching data';
        console.error(err);
      }
    });
  }
}
