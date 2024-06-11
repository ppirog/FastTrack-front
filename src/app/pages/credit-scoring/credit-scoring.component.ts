import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-credit-scoring',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './credit-scoring.component.html',
  styleUrl: './credit-scoring.component.css'
})
export class CreditScoringComponent {

}
