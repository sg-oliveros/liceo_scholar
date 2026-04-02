import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, AdminSidebarComponent],
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.scss']
})
export class AdminDashboardComponent implements AfterViewInit {
  @ViewChild('activityChart') private chartCanvas!: ElementRef;

  ngAfterViewInit() {
    new Chart(this.chartCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        datasets: [{
          data: [65, 35, 50, 25, 20, 5, 5, 5, 5],
          backgroundColor: '#8b0000', // Liceo Dark Red
          borderRadius: 3,
          barThickness: 35
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false }, ticks: { display: false } },
          y: { 
            beginAtZero: true, 
            grid: { color: '#f0f0f0' },
            ticks: { display: false } 
          }
        }
      }
    });
  }
}