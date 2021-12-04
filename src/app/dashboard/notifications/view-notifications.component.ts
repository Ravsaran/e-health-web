import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';
import { Notification } from 'src/app/models/notification.model';
import { PrescriptionDetails } from 'src/app/models/prescriptionDetails.model';

@Component({
  selector: 'app-view-notifications',
  templateUrl: './view-notifications.component.html',
  styleUrls: ['./view-notifications.component.css'],
})
export class ViewNotificationsComponent implements OnInit {
  dataSource = new MatTableDataSource<Notification>();
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  notifact: Notification[] = [];
  
  displayedColumns: string[] = [
    'actionItem',
    'timing',
    'description'
  ];
  userSubscription: Subscription;

  constructor(
    private notificationService: NotificationService,
    private dialogRef: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchAllPatients();
  }

  fetchAllPatients() {
    let prescriptionId =50;
    this.userSubscription = this.notificationService
      .fetchAllNotifications(prescriptionId)
      .subscribe((response: PrescriptionDetails[]) => {
        
       console.log(response);
       
       response.forEach(x => {
         let noti=  new Notification();
         noti.actionItem=x.actionItem == null? "":x.actionItem,
         noti.description=x.description == null?"":x.description,
         noti.timing=x.timing1 == null? "": x.timing1;
         this.notifact.push(noti);
       });
       
       this.dataSource.data=this.notifact;
        
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
