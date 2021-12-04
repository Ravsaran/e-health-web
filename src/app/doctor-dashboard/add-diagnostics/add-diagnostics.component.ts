import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/models/user-details.model';
import { Diagnsotic } from 'src/app/models/diagnostic.model';
import {DiagnosticDetailService  } from 'src/app/services/diagnostic-detail.service';
import { DialogRole } from '@angular/material/dialog';

@Component({
  selector: 'app-add-diagnostics',
  templateUrl: './add-diagnostics.component.html',
  styleUrls: ['./add-diagnostics.component.css'],
})
export class AddDiagnosticComponent implements OnInit {
  diagnsotic: Diagnsotic;
  patientId:string;
  patientName:String;
  doctorId:string;
  testName:string;
  doctorName:string;


  constructor(
    private diagnosticDetailService: DiagnosticDetailService,
    private router: Router
  ) {
   
  }

  ngOnInit(): void {
    let userDetails:UserDetails = JSON.parse(sessionStorage.getItem('loggeduser'));
    this.doctorId = userDetails.professionId;
    this.doctorName = userDetails.name;
  }

  saveDiagnosticReport() {
   
    

   
    let diagnosticDetails = new Diagnsotic();
    diagnosticDetails.patientId = this.patientId;
    diagnosticDetails.doctorId =this.doctorId;
    diagnosticDetails.testName =this.testName;

    

    this.diagnosticDetailService.createDiagnostics(diagnosticDetails)
      .subscribe((x: any) => {
        this.router.navigate(['/dashboard/doctors']);
      });
    
  }
  }

