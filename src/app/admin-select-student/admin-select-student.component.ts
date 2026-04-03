import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-admin-select-student',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './admin-select-student.component.html',
    styleUrl: './admin-select-student.component.scss'
})
export class AdminSelectStudentComponent implements OnInit {
    studentName: string | null = '';

    constructor(
    private route: ActivatedRoute,
    private location: Location
    ) {}

    ngOnInit(): void {
    this.studentName = this.route.snapshot.paramMap.get('id');
    }

    goBack(): void {
    this.location.back();
    }
}