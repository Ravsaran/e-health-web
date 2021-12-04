import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { UserDetails } from 'src/app/models/user-details.model';
import { Prescription } from 'src/app/models/prescription.model';
import { PrescriptionService } from 'src/app/services/prescription.service';
import { PrescriptionDetailsService } from 'src/app/services/prescriptionDetails.service';

@Component({
  selector: 'app-view-prescription',
  templateUrl: './view-prescription.component.html',
  styleUrls: ['./view-prescription.component.css'],
})
export class ViewPrescriptionComponent implements OnInit {
  dataSource = new MatTableDataSource<Prescription>();
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  prescription: Prescription;
  patientId:string;
  patientName:string;
  doctorId:string;
  medicalCondition:string;
  doctorName:string;
  // Specify columns tht should be rendered, must match names of matColumnDef
  // ID is not beign displayed as its not present here 
  displayedColumns: string[] = [
    'patientId',
    'doctorId',
    'medicalCondition'
  ];
  userSubscription: Subscription;

  constructor(
    private prescriptionService: PrescriptionService,
    private prescriptionDetailsService :PrescriptionDetailsService, 
    private dialogRef: MatDialog
  ) {}

  ngOnInit(): void {
    let userDetails:UserDetails = JSON.parse(sessionStorage.getItem('loggeduser'));
   // this.doctorId = userDetails.professionId;
    //this.doctorName = userDetails.name;

    if(userDetails.role == 'patient'){
      this.patientId = userDetails.professionId;
      
    }
      else{
        
        this.doctorId = userDetails.professionId;
        this.fetchAllPrescriptions(this.doctorId);
      }

    
  }
  fetchAllPrescriptions(id) {
    this.userSubscription = this.prescriptionService
      .fetchAllPrescription(id)
      .subscribe((response: Prescription[]) => {
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
