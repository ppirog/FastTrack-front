import {Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {LayoutComponent} from "./pages/layout/layout.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {RegisterComponent} from "./pages/register/register.component";
import {CompanyComponent} from "./pages/company/company.component";
import {FinancialDataComponent} from "./pages/financial-data/financial-data.component";
import {CreditScoringComponent} from "./pages/credit-scoring/credit-scoring.component";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'company',
        component: CompanyComponent
      },
      {
        path: 'financialData',
        component: FinancialDataComponent
      },{
        path: 'creditScoring',
        component: CreditScoringComponent
      },
    ]
  },
];
