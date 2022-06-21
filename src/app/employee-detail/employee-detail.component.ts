import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  id: number;
  employee: Employee;
  constructor(private routerA: ActivatedRoute, private emmService: EmployeeService) { }

  ngOnInit(): void {
    this.id = this.routerA.snapshot.params['id'];
    this.employee = new Employee();
    this.emmService.getEmployeeByID(this.id).subscribe(data =>{
      this.employee = data;
    })

  }

}
