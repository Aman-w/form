import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[]=[];
  oldemployee:any;
  localItem: string;
  constructor() { 
this.localItem=localStorage.getItem("employee");
if(this.localItem==null){
  this.employees=[];
}
else{
  this.employees=JSON.parse(this.localItem);
}
  }

  getData(){
    return this.employees;
  }


  addbtn(employee:Employee){
    this.employees.push(employee);
    localStorage.setItem("employee",JSON.stringify(this.employees));
  }

  onDelete(id:Number){

    let employee = this.employees.find(x=>x.eDOB === id);
    let index = this.employees.indexOf(employee,0);
    this.employees.splice(index,1);
    localStorage.setItem("employees",JSON.stringify(this.employees));

  }

  onGet(id: Number){
    return this.employees.find(x=>x.eDOB === id);

  }

  onUpdate(employee: Employee){
     this.oldemployee = this.employees.find(x=>x.eName === employee.eName);
    this.oldemployee.eName=employee.eName;
    this.oldemployee.eAddress=employee.eAddress;
    this.oldemployee.eEmail=employee.eEmail;
    this.oldemployee.eDOB=employee.eDOB;
    this.oldemployee.eGender=employee.eGender;
    this.oldemployee.eDate_of_joining=employee.eDate_of_joining;
    this.oldemployee.eMartial_status=employee.eMartial_status;
    this.oldemployee.eContact=employee.eContact;

    localStorage.setItem("employees",JSON.stringify(this.employees));


  }
}
