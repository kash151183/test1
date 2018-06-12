import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
getEmployees(){
  return[
   {"id":1, "name": "sunil", "age": 30},
   {"id":2, "name": "sunil2", "age": 32},
   {"id":3, "name": "sunil3", "age": 34},
   {"id":4, "name": "sunil4", "age": 36}
  ];
}

}
