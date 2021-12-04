import { PrescriptionDetails } from "./prescriptionDetails.model";
export class Prescription {
    id:string;
    patientId: string;
    doctorId: string;
    medicalCondition: string;
    prescriptionDetails: PrescriptionDetails[];

}