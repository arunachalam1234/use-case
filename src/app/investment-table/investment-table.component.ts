import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-investment-table',
  standalone: false,
  templateUrl: './investment-table.component.html',
  styleUrl: './investment-table.component.css'
})
export class InvestmentTableComponent {
  @Input() investmentData = [];
}
