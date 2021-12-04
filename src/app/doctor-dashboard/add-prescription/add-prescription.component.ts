import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient.model';
import { Prescription } from 'src/app/models/prescription.model';
import { PrescriptionDetails } from 'src/app/models/prescriptionDetails.model';
import { UserResponse } from 'src/app/models/user-response.model';
import { User } from 'src/app/models/user.model';
import { Warehouse } from 'src/app/models/warehouse.model';
import { PrescriptionService } from 'src/app/services/prescription.service';

@Component({
  selector: 'app-add-prescription',
  templateUrl: './add-prescription.component.html',
  styleUrls: ['./add-prescription.component.css'],
})
export class AddPrescriptionComponent implements OnInit {
  prescription: Prescription;
  patientId:String;
  doctorId:String;
  medicalCondition:String;

  foods: any[] = [
    {value: 'Fruits', viewValue: 'Fruits', 
    description:'Good sources of Vitamin C (a powerful natural antioxidant), B-complex vitamins, dietary fiber'},
    {value: 'vegetables', viewValue: 'Vegetables',description:'Good source of fibers'},
    {value: 'meat', viewValue: 'Meat',description:'good source of proteins'},
  ];

  exercises: any[] = [
    {value: 'AerobicExcercise', viewValue: 'Aerobic Exercise', 
    description:'increases your heart rate, works your muscles, and makes you breathe faster and harder'},
    {value: 'FlexibilityExercise', viewValue: 'Flexibility Exercise',
    description:'may include stretching, foam rolling, yoga, tai chi, and Pilates Strength/Resistance'},
    {value: 'StrengthExcercise', viewValue: 'Strength Excercise',
    description:'Strength training involves moving your muscles against some kind of resistance,'},
  ];

  medicines: any[] = [
    {value: 'paracetomol', viewValue: 'Paracetomol',
     description:'helps to control body temprature'},
    {value: 'tylenol', viewValue: 'TYLENOL',
    description:'Temporary Relief For Common Cold & Flu Symptoms, Including Fever and Headache.'},
    {value: 'delsym', viewValue: 'Delsym',
    description:'cough suppressant that is used to treat cough caused by the common cold or flu'},
  ];
  
  timings: any[]=[
    {value: '9AM', viewValue: '9-00 AM',
    description:'morning'},
    {value: '1PM', viewValue: '1-00 PM',
    description:'afternoon'},
    {value: '8PM', viewValue: '8-00 PM',
    description:'night'},
  ];


  constructor(
    private prescriptionService: PrescriptionService,
    private router: Router
  ) {
    this.prescription = new Prescription();
  }

  ngOnInit(): void {
  }

  savePrescription() {
   // this.prescription.patientId = this.doctor_name;
    //this.prescription.doctorId= this.specialization;
    //this.prescription.medicalCondition= this.gender;
    //this.prescription.email_id = this.email_id;
  
    
   

   /* this.doctorService.createUser(userdata)
      .subscribe((x: any) => {
        this.doctor.user = x;
        this.doctorService.addDoctor(this.doctor).subscribe((x) => {
        this.router.navigate(['/dashboard/doctors']);
      });
      });
    */
  }
  }

