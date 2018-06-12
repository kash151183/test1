import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  template: `
  <h2>Employee Deatil</h2>
  <ul *ngFor="let employee of employees">
  <li>{{employee.id}}  - {{employee.name}}  -  {{employee.age}} </li>
  </ul>

  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {
  public employees = [ ];
  constructor() { }

  ngOnInit() {
  }

}
