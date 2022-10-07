import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../IEmployee';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  employees: IEmployee[] = [];

  showAddEmployeeModal = false;

  openAddEmployeeModal(): void {
    this.showAddEmployeeModal = !this.showAddEmployeeModal;
  }

  departments: string[] = [];

  addEmployee(employee: IEmployee) {
    this._employeesService.addEmployee(employee);
    this.showAddEmployeeModal = false;
    this.employees = this._employeesService.getEmployees();
  }

  deleteEmployee(employee: IEmployee) {
    this._employeesService.deleteEmployee(employee);
    this.employees = this._employeesService.getEmployees();
  }

  constructor(private _employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.employees = this._employeesService.getEmployees();
    this.departments = this._employeesService.getDepartments();
  }
}
