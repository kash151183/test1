import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
  <h2>Employee List</h2>
  <ul *ngFor="let employee of employees">
  <li>{{employee.name}} </li>
  </ul>

  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {
  public employees = [ ];
  constructor() { }

  ngOnInit() {
  }

}
