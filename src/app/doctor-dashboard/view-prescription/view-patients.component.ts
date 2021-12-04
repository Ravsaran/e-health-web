import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Patient } from 'src/app/models/patient.model';
import { PatientDetailService } from 'src/app/services/patient-detail.service';

@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.component.html',
  styleUrls: ['./view-patients.component.css'],
})
export class ViewPatientsComponent implements OnInit {
  dataSource = new MatTableDataSource<Patient>();
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'gender',
    'email',
    'address',
    'mobileNumber',
  ];
  userSubscription: Subscription;

  constructor(
    private patientDetailService: PatientDetailService,
    private dialogRef: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchAllPatients();
  }
  fetchAllPatients() {
    this.userSubscription = this.patientDetailService
      .fetchAllPatients()
      .subscribe((response: Patient[]) => {
        this.dataSource.data = response;
      });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
