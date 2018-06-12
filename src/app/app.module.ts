import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { PipeComponent } from './pipe/pipe.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';
//import { NodeComponent } from './node/node.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PipeComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
    //NodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
