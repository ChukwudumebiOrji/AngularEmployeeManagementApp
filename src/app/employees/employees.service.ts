import { Injectable } from '@angular/core';
import { departments } from '../Departments';
import { IEmployee } from '../IEmployee';

@Injectable()
export class EmployeesService {
  employees: IEmployee[] = [];

  staff: IEmployee[] = [];

//   me: IEmployee = {
//     firstName: 'Chukwudumebi',
//     lastName: 'Orji',
//     department: 'Intern',
//     id: 'CO0001',
//   };

  departments = [...departments];

  setLocalStorage() {
    this.window.localStorage.setItem('staff', JSON.stringify(this.employees));
  }

  getLocalStorage() {
    this.employees = JSON.parse(this.window.localStorage.getItem('staff')!);
  }

  getEmployees() {
    this.getLocalStorage;
    return this.employees;
  }

  addEmployee(employee: IEmployee) {
    const len = '' + (this.employees.length + 1);
    employee.id =
      employee.firstName.charAt(0) +
      employee.lastName.charAt(0) +
      len.padStart(4, '0');
    this.employees.push(employee);
    this.setLocalStorage();
  }

  deleteEmployee(employee: IEmployee) {
    this.employees = this.employees.filter((emp) => emp != employee);
    this.setLocalStorage();
  }

  editEmployee(id: string, newEmployee: any) {
    this.getLocalStorage();
    const index = this.employees.findIndex((emp) => emp.id === id);
    this.employees[index] = newEmployee;
    this.setLocalStorage();
  }

  getDepartments(): string[] {
    return this.departments;
  }

//   addMe() {
//     this.employees = [this.me, ...this.employees];
//     this.setLocalStorage();
//   }

  constructor(private window: Window) {
//     this.addMe();
  }
}
