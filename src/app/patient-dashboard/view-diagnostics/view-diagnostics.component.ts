import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Diagnsotic } from 'src/app/models/diagnostic.model';
import { UserDetails } from 'src/app/models/user-details.model';
import { DiagnosticDetailService } from 'src/app/services/diagnostic-detail.service';

@Component({
  selector: 'app-view-diagnostics',
  templateUrl: './view-diagnostics.component.html',
  styleUrls: ['./view-diagnostics.component.css'],
})
export class ViewDiagnosticsComponent implements OnInit {
  dataSource = new MatTableDataSource<Diagnsotic>();
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  displayedColumns: string[] = [
    'patientId',
    'doctorId',
    'testName'
  ];
  userSubscription: Subscription;

  constructor(
    private diagnosticDetailService: DiagnosticDetailService,
    private dialogRef: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchAllDiagnostics();
  }
  fetchAllDiagnostics() {
    let userDetails:UserDetails = JSON.parse(sessionStorage.getItem('loggeduser'));
    //console.log(userDetails.professionId);
    this.userSubscription = this.diagnosticDetailService.getDiagnostics(userDetails.professionId)
      .subscribe((response: Diagnsotic[]) => {
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
