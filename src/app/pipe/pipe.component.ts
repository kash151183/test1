import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  template: `
  <h2>{{name}}  </h2>
  <h2>{{name | lowercase }}  </h2>
  <h2>{{name | uppercase }}  </h2>
  <h2>{{message |titlecase }}  </h2>
  <h2>{{name | slice:3:5 }}  </h2>
  <h2>{{person | json }}  </h2>

  `,
  styles: []
})
export class PipeComponent implements OnInit {

  public name="Codevoultion";
  public message="Welocme to codevoultion";
  public person ={
    "firstName" : "sunil",
    "lastName" : "kumar"
  }

  constructor() { }

  ngOnInit() {
  }

}
