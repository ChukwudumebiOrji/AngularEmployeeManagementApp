import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeesService } from '../employees/employees.service';
import { IEmployee } from '../IEmployee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  logBtn(e: Event): void {
    console.log(e.target);
  }

  @Output() deleteEmployee = new EventEmitter();

  emitDeleteEmployeeEvent(employee: IEmployee) {
    this.deleteEmployee.emit(employee);
  }

  @Input() employees: IEmployee[] = [];

  constructor() {}

  ngOnInit(): void {}
}
