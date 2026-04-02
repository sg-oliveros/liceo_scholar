import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, AdminSidebarComponent],
  templateUrl:'./admin-dashboard.html',
  styleUrls: ['./admin-dashboard.scss']
})
export class AdminDashboardComponent {
  // You can later populate this with real data from your MySQL backend
  constructor() {}
}