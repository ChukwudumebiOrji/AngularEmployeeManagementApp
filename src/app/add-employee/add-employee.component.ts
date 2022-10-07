import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  @Input() departments: string[] = [];

  @Output() addEmployee = new EventEmitter();

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

  addEmployeeForm = this._fb.group({
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

  emitAddEmployeeEvent() {
    this.addEmployee.emit(this.addEmployeeForm.value);
    this.addEmployeeForm.reset();
  }

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {}
}
