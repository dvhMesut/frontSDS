import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id: number;
  employee: Employee = new Employee();
  constructor(private employeeservice: EmployeeService, private router: Router,
     private routerAc: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.routerAc.snapshot.params['id'];
    this.employeeservice.getEmployeeByID(this.id).subscribe(data =>{
      this.employee = data;
    }, error => console.log(error));
  }


  onSubmit(){
    this.employeeservice.updateEmployee(this.id, this.employee).subscribe(data =>{
      console.log(data);
       this.goToEmployeeList();
    }, error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(["/employees"]);
  }
}
