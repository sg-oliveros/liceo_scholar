import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserSidebarComponent } from '../user-sidebar/user-sidebar.component';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule, UserSidebarComponent],
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {

  student = {
    fullName: 'OLIVEROS, SAMANTHA GAYLE R.',
    course: 'CISCO BSIT',
    yearLevel: '2ND YEAR',
    age: '18 YEARS OLD',
    sex: 'FEMALE',
    scholarshipType: 'ACADEMIC SCHOLARSHIP (FULL SCHOLAR)',
    profileImage: 'assets/images/profile.jpg',
    history: [
      { term: '3RD YR (1ST SEMESTER)', status: 'PENDING' },
      { term: '2ND YR (2ND SEMESTER)', status: 'FINISHED' },
      { term: '2ND YR (1ST SEMESTER)', status: 'FINISHED' },
      { term: '1ST YR (2ND SEMESTER)', status: 'FINISHED' },
      { term: '1ST YR (1ST SEMESTER)', status: 'FINISHED' },
    ]
  };

  constructor() { }
  ngOnInit(): void { }
}