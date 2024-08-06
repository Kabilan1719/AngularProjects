import { Component } from '@angular/core';
import { Employee } from './model/employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  employee : Employee ;
  result : string;
  employeeArr : Employee[];
  flag : boolean;

  constructor(private service : EmployeeService){
    this.employee = new Employee();
    this.result = "";
    this.employeeArr = [];
    this.flag = false;
  }

  insertemployee(data : any)
  {
    this.employee.id = data.empId;
    this.employee.empName = data.empName;
    this.employee.empSalary = data.empSalary;
    this.result = this.service.insertemployee(this.employee);
  }

updateEmployee(data : any)
  {
    this.employee.id = data.empId;
    this.employee.empName = data.empName;
    this.employee.empSalary = data.empSalary;
    this.result = this.service.updateEmployee(this.employee);
  }

  deleteEmployee(data : any)
  {
    this.result = this.service.deleteEmployee(data.empId);
  }

  findAllEmployee(){
    this.employeeArr = this.service.findAllEmployee();
    this.flag = true;
  }

  findEmployee(data : any)
  {
    this.employee = this.service.findEmployee(data.empId);
    this.result = this.employee.id +" "+this.employee.empName+" "+this.employee.empSalary;
  }
}
