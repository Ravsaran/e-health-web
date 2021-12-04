import { PrescriptionDetails } from "./prescriptionDetails.model";
export class Prescription {
    patientId: string;
    doctorId: string;
    medicalCondition: string;
    prescriptionDetails: PrescriptionDetails[];

}