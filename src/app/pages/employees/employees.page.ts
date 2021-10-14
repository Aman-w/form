import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {

  employees: Employee[];
  constructor(private data: EmployeeService) {}

  ngOnInit(): void {
   this.employees= this.data.getData()
  }

  onDelete(id: number){
    this.data.onDelete(id);
  }

}
