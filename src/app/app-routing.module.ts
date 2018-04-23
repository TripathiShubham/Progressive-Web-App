import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './Dashboard/dashboard.component';
import { AddEmployeeComponent } from './AddEmployee/addEmployee.component';
import { AttendenceComponent } from './Attendence/attendence.component';

const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'add', component: AddEmployeeComponent },
    { path: 'attendence', component: AttendenceComponent },
    { path: '', redirectTo : '/dashboard', pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes)
    ],
    exports : [
        RouterModule
    ],
    providers: [ ],
    declarations : [
        DashboardComponent, AddEmployeeComponent, AttendenceComponent
    ]
})
export class AppRoutingModule {
}
