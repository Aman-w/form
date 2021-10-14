import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  id:number;
  header:string;
  employee: Employee={
    eName: '',
     eAddress:'',
     eEmail:'',
     eDOB:0,
     eGender:'',
      eDate_of_joining:0,
    eMartial_status:'',
    eContact:0

  }
  constructor(private router: Router,private route: ActivatedRoute, private data: EmployeeService) { }

  ngOnInit() {
   this.id= + this.route.snapshot.paramMap.get('id');
   this.header = this.id === 0? 'Add' : 'Edit';

   if(this.id !=0){
     this.employee = this.data.onGet(this.id);
   }

  } 



  onSubmit(form: NgForm){
    let employee: Employee={
      eName: form.value.ename,
      eAddress: form.value.eAddress,
      eEmail: form.value.eEmail,
      eDOB: form.value.eDOB,
      eGender: form.value.eGender,
      eDate_of_joining: form.value.eDate_of_joining,
      eMartial_status: form.value.eMartial_status,
      eContact: form.value.eContact

    }

    if(this.id ===0){
      this.data.addbtn(employee);
    }
    else{
      this.data.onUpdate(employee);
    }
    this.router.navigateByUrl('');
    }

}
