import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';

export interface Student {
  name: string;
  course: string;
  scholarshipType: string;
  status: 'Complete' | 'Missing' | '---';
}

@Component({
  selector: 'app-admin-student-list',
  standalone: true,
  imports: [CommonModule, FormsModule, AdminSidebarComponent],
  templateUrl: './admin-student-list.component.html',
  styleUrl: './admin-student-list.component.scss'
})
export class StudentListComponent {

  // 🔍 SEARCH
  searchTerm: string = '';

  // 🎛️ FILTER MODAL
  isFilterOpen: boolean = false;

  // 🔽 DROPDOWN (per row)
  openDropdownIndex: number | null = null;

  // 🎯 FILTER VALUES
  filters = {
    course: '',
    yearLevel: '',
    scholarship: '',
    status: ''
  };

  // 📊 SAMPLE DATA
  students: Student[] = [
    {
      name: 'Oliveros, Samantha Gayle R.',
      course: 'CISCO BSIT 2-1',
      scholarshipType: 'Academic Scholarship',
      status: 'Complete'
    },
    {
      name: 'Paradillo, Raque Alexy',
      course: 'CISCO BSIT 2-1',
      scholarshipType: 'Non-Academic Scholarship',
      status: 'Missing'
    },
    {
      name: 'Reyes, Christy Ann E. Reyes',
      course: 'CISCO BSIT 2-1',
      scholarshipType: 'Non-Academic Scholarship',
      status: '---'
    }
  ];

  // 🔎 MAIN FILTER LOGIC
  filteredStudents(): Student[] {
    return this.students.filter(student => {

      // 🔍 SEARCH
      const matchesSearch =
        student.name.toLowerCase().includes(this.searchTerm.toLowerCase());

      // 🎯 FILTERS
      const matchesCourse =
        !this.filters.course || student.course === this.filters.course;

      const matchesScholarship =
        !this.filters.scholarship ||
        student.scholarshipType.toLowerCase().includes(this.filters.scholarship.toLowerCase());

      const matchesStatus =
        !this.filters.status || student.status === this.filters.status;

      // (optional: yearLevel if needed later)

      return matchesSearch && matchesCourse && matchesScholarship && matchesStatus;
    });
  }

  // 🎛️ OPEN/CLOSE FILTER MODAL
  toggleFilter(): void {
    this.isFilterOpen = !this.isFilterOpen;
  }

  // 💾 APPLY FILTER (just closes modal)
  applyFilters(): void {
    this.isFilterOpen = false;
  }

  // ❌ RESET FILTERS (optional but useful)
  resetFilters(): void {
    this.filters = {
      course: '',
      yearLevel: '',
      scholarship: '',
      status: ''
    };
  }

  // 🔽 TOGGLE STATUS DROPDOWN
  toggleDropdown(index: number): void {
    this.openDropdownIndex =
      this.openDropdownIndex === index ? null : index;
  }

  // 🔄 UPDATE STATUS
  updateStatus(student: Student, newStatus: Student['status']): void {
    student.status = newStatus;
    this.openDropdownIndex = null;
  }
}