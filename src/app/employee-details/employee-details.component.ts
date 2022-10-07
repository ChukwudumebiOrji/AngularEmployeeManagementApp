import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../employees/employees.service';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit, OnDestroy {
  id: string = '';

  departments: string[] = [];

  private _sub: any;

  firstNameIsEmpty = false;
  lastNameIsEmpty = false;

  setFirstNameIsEmpty(e: any) {
    if (e.target.value.length < 2) this.firstNameIsEmpty = true;
    if (e.target.value.length > 2) this.firstNameIsEmpty = false;
  }

  setLastNameIsEmpty(e: any) {
    if (e.target.value.length < 2) this.lastNameIsEmpty = true;
    if (e.target.value.length > 2) this.lastNameIsEmpty = false;
  }

  editEmployeeForm = this._formBuilder.group({
    firstName: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.pattern(/[A-Za-z]/),
      ],
    ],
    lastName: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.pattern(/[A-Za-z]/),
      ],
    ],
    department: ['', [Validators.required]],
  });

  emitEditEmployeeEvent() {
    const { firstName, lastName, department } = this.editEmployeeForm.value;
    const newEmployee = { firstName, lastName, department, id: this.id };
    this._employeesService.editEmployee(this.id, newEmployee);
    this._router.navigate(['']);
  }

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _employeesService: EmployeesService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._sub = this._activatedRoute.params.subscribe(
      (params) => (this.id = params['id'])
    );
    this.departments = this._employeesService.getDepartments();
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }
}
