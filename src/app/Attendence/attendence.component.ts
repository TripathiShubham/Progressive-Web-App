import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';

@Component({
    templateUrl: './attendence.view.html'
})
export class AttendenceComponent implements OnInit {
    listItem:  Array<any>;
    name: String;

    openDialog(name) {
        this.name = name;
        const dialog: any = document.querySelector('dialog');
        dialog.querySelector('.close-dialog').addEventListener('click', function() {
            dialog.close();
        });
        dialog.showModal();
    }

    ngOnInit() {
        this.listItem = [
            {
                'name' : 'Shubham',
                'id' : '277',
                'img' : '/assets/img/u6.png'
            },
            {
                'name' : 'Himanshu',
                'id' : '288',
                'img' : '/assets/img/u3.png'
            },
            {
                'name' : 'Ram',
                'id' : '220',
                'img' : '/assets/img/u2.png'
            },
            {
                'name' : 'Prasanna',
                'id' : '260',
                'img' : '/assets/img/u5.png'
            },
            {
                'name' : 'Vaibhav',
                'id' : '440',
                'img' : '/assets/img/u1.png'
            },
            {
                'name' : 'Harish',
                'id' : '1',
                'img' : '/assets/img/u4.png'
            },
            {
                'name' : 'Chandrashekhar',
                'id' : '222',
                'img' : '/assets/img/u1.png'
            },
            {
                'name' : 'Govind',
                'id' : '290',
                'img' : '/assets/img/u6.png'
            },
        ];
    }
}
