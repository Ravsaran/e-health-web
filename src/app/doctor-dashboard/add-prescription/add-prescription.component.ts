import { unescapeIdentifier } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prescription } from 'src/app/models/prescription.model';
import { PrescriptionDetails } from 'src/app/models/prescriptionDetails.model';
import { UserDetails } from 'src/app/models/user-details.model';
import { PrescriptionService } from 'src/app/services/prescription.service';
import { PrescriptionDetailsService } from 'src/app/services/prescriptionDetails.service';

@Component({
  selector: 'app-add-prescription',
  templateUrl: './add-prescription.component.html',
  styleUrls: ['./add-prescription.component.css'],
})
export class AddPrescriptionComponent implements OnInit {
  prescription: Prescription;
  patientId:string;
  patientName:string;
  doctorId:string;
  medicalCondition:string;
  doctorName:string;
  prescriptionDetails:PrescriptionDetails[] =[];
  medicineName:string;
  medicineTiming1:string;
  medicineTiming2:string;
  medicineTiming3:string;
  foodItem:string;
  foodItemTiming1:string;
  foodItemTiming2:string;
  foodItemTiming3:string;
  exercise:string;
  exerciseTiming1:string;
  exerciseTiming2:string;
  exerciseTiming3:string;


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
    private prescriptionDetailsService :PrescriptionDetailsService, 
    private router: Router
  ) {
    this.prescription = new Prescription();
  }

  ngOnInit(): void {
    let userDetails:UserDetails = JSON.parse(sessionStorage.getItem('loggeduser'));
    this.doctorId = userDetails.professionId;
    this.doctorName = userDetails.name;
  }

  savePrescription() {
   this.prescription.patientId = this.patientId;
    this.prescription.doctorId= this.doctorId;
    this.prescription.medicalCondition= this.medicalCondition;
    //this.prescription.email_id = this.email_id;
  
    
   

    this.prescriptionService.createPrescription(this.prescription)
      .subscribe((x: Prescription) => {

        let pres = new PrescriptionDetails();
        pres.prescriptionId= x.id;
        pres.actionItem= this.medicineName == undefined ? "":this.medicineName;
        pres.timing1= this.medicineTiming1 == undefined ? "":this.medicineTiming1;
        pres.timing2= this.medicineTiming2 == undefined ? "":this.medicineTiming2;
        pres.timing3= this.medicineTiming3 == undefined ? "":this.medicineTiming3;

        let pres1 = new PrescriptionDetails();
        pres1.prescriptionId= x.id;
        pres1.actionItem= this.foodItem == undefined ? "":this.foodItem;
        pres1.timing1= this.foodItemTiming1 == undefined ? "":this.foodItemTiming1;
        pres1.timing2= this.foodItemTiming2 == undefined ? "":this.foodItemTiming2;
        pres1.timing3= this.foodItemTiming3 == undefined ? "":this.foodItemTiming3;

        let pres2 = new PrescriptionDetails();
        pres2.prescriptionId= x.id;
        pres2.actionItem= this.exercise == undefined ? "":this.exercise;
        pres2.timing1= this.exerciseTiming1 == undefined ? "":this.exerciseTiming1;
        pres2.timing2= this.exerciseTiming2 == undefined ? "":this.exerciseTiming2;
        pres2.timing3= this.exerciseTiming3 == undefined ? "":this.exerciseTiming3;

        this.prescriptionDetails.push(pres);
        this.prescriptionDetails.push(pres1);
        this.prescriptionDetails.push(pres2);

        this.prescriptionDetailsService.createPrescriptionDetails(this.prescriptionDetails)
        .subscribe(x =>{
          console.log("succesfully created the prescription");
        });
        /*this.doctor.user = x;
        this.doctorService.addDoctor(this.doctor).subscribe((x) => {
       // this.router.navigate(['/dashboard/doctors']);*/
      });
      //});
    //*/
  }
  }

