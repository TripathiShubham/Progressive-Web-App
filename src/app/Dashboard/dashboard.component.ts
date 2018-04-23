import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './dashboard.view.html'
})
export class DashboardComponent implements OnInit {
    listItem:  Array<any>;
    SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

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

      swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT) {
        console.log(currentIndex);
        const dialog: any = document.querySelector('dialog');

        dialog.querySelector('.close').addEventListener('click', function() {
            dialog.close();
          });
        // next
        if (action === this.SWIPE_ACTION.RIGHT) {
            console.log('right');
            dialog.showModal();
        }

        // previous
        if (action === this.SWIPE_ACTION.LEFT) {
            console.log('left');
        }
    }
}
