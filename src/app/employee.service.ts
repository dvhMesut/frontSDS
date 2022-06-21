import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(private http: HttpClient ) { }

  getEmployeeList(): Observable<Employee[]>{
    return this.http.get<Employee[]>("http://localhost:8081/employee/getAllEmployee");
  }
  createEmployee(employee: Employee): Observable<Object>{
    return this.http.post("http://localhost:8081/employee/addEmp",employee);
  }

  getEmployeeByID(id: number): Observable<Employee>{
    return this.http.get<Employee>(`http://localhost:8081/employee/getEmpById/${id}`);
  }

  updateEmployee(id:number, employee: Employee): Observable<Object>{
    return this.http.put(`http://localhost:8081/employee/updateEmp/${id}`,employee)
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.http.delete(`http://localhost:8081/employee/deleteEmp/${id}`);
  }
}
