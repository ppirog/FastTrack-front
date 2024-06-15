import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgFor, NgIf, NgStyle} from "@angular/common";
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {CreditReport} from "../creditReport.interface";

@Component({
  selector: 'app-credit-scoring',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    NgIf,
    NgFor,
    NgStyle
  ],
  templateUrl: './credit-scoring.component.html',
  styleUrl: './credit-scoring.component.css'
})
export class CreditScoringComponent {
  companyKrs: string = '';
  creditReport: CreditReport | null = null;
  loading: boolean = false;
  error: string = '';

  constructor(private http: HttpClient) {
  }

  fetchCompanyData() {
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
    this.creditReport = null;

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const apiUrl = `http://localhost:8080/creditReport/${this.companyKrs}`;

    this.http.get<CreditReport>(apiUrl, {headers}).subscribe({
      next: (data) => {
        this.loading = false;
        if (data) {
          console.log(data)
          this.creditReport = data;
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

  getScoreColor(score: number): string {
    const red = Math.min(255, 255 - 2 * score);
    const green = Math.min(255, 2 * score);
    return `rgb(${red}, ${green}, 0)`;
  }

  protected readonly Number = Number;
}
