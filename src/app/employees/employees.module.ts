import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesService } from './employees.service';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [AddEmployeeComponent, EmployeeListComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild([])],
  providers: [EmployeesService],
  exports: [AddEmployeeComponent, EmployeeListComponent],
})
export class EmployeesModule {}
