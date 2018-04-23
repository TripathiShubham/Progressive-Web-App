import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    templateUrl: './addEmployee.view.html'
})
export class AddEmployeeComponent {

    constructor(private location: Location) { }

    goBack(): void {
        this.location.back();
    }
}
