import {Component} from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CommonModule, NgIf} from '@angular/common';
import {FinancialData} from '../financialData.interface';

@Component({
  selector: 'app-financial-data',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    NgIf,
    CommonModule
  ],
  templateUrl: './financial-data.component.html',
  styleUrls: ['./financial-data.component.css']
})
export class FinancialDataComponent {
  companyKrs: string = '';
  financialData: FinancialData | null = null;
  loading: boolean = false;
  error: string | null = null;

  constructor(
    private http: HttpClient
  ) {
  }

  findFinancialData() {
    if (!this.companyKrs) {
      this.error = "Please enter a valid KRS number.";
      return;
    }
    this.loading = true;
    this.error = null;

    const url = `http://localhost:8080/financialData/${this.companyKrs}`;
    const token = sessionStorage.getItem('token');

    if (!token) {
      this.error = "Authentication token is missing.";
      this.loading = false;
      return;
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<FinancialData>(url, {headers}).subscribe({
      next: (data) => {
        this.financialData = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = "Failed to load financial data. " + (err.error?.message || '');
        this.loading = false;
      }
    });
  }
}
