import { Component, Input, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-investment-chart',
  standalone: false,
  templateUrl: './investment-chart.component.html',
  styleUrl: './investment-chart.component.css'
})
export class InvestmentChartComponent {

  @Input() investmentData = [];
  chart = null;
  ngOnInit() {
    this.prepareChart()
  }

  prepareChart() {
    if (this.chart) this.chart.destroy();
    var grapharea = (document.getElementById("myChart") as HTMLCanvasElement).getContext("2d");
    var xValues: any = this.investmentData.map(data => data.name);
    var yValues = this.investmentData.map(data => data.count);
    var barColors = [
      "#b91d47",
      "#00aba9",
      "#2b5797",
      "#e8c3b9",
      "#1e7145"
    ];
    this.chart = new Chart(grapharea, {
      type: "pie",
      data: {
        labels: xValues,
        datasets: [{
          // backgroundColor: barColors,
          data: yValues
        }],
      },
      options: {
        aspectRatio: 1,
        maintainAspectRatio: true,
        plugins: {
          title: {
            display: true,
            text: 'Investment chart'
          },
          
        },
      }
    });

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['investmentData']) {
      console.log(this.investmentData)
      this.prepareChart();
    }
  }
}
