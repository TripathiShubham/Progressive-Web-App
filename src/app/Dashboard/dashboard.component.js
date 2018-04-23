"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Dashboard = (function () {
    function Dashboard() {
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
    }
    Dashboard.prototype.ngOnInit = function () {
        this.listItem = [
            {
                'name': 'Shubham',
                'id': '277',
                'img': '/assets/img/u6.png'
            },
            {
                'name': 'Himanshu',
                'id': '288',
                'img': '/assets/img/u3.png'
            },
            {
                'name': 'Ram',
                'id': '220',
                'img': '/assets/img/u2.png'
            },
            {
                'name': 'Prasanna',
                'id': '260',
                'img': '/assets/img/u5.png'
            },
            {
                'name': 'Vaibhav',
                'id': '440',
                'img': '/assets/img/u1.png'
            },
            {
                'name': 'Harish',
                'id': '1',
                'img': '/assets/img/u4.png'
            },
            {
                'name': 'Chandrashekhar',
                'id': '222',
                'img': '/assets/img/u1.png'
            },
            {
                'name': 'Govind',
                'id': '290',
                'img': '/assets/img/u6.png'
            },
        ];
    };
    Dashboard.prototype.ngAfterViewInit = function () {
        componentHandler.upgradeAllRegistered();
    };
    Dashboard.prototype.swipe = function (currentIndex, action) {
        if (action === void 0) { action = this.SWIPE_ACTION.RIGHT; }
        console.log(currentIndex);
        var dialog = document.querySelector('dialog');
        dialog.querySelector('.close').addEventListener('click', function () {
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
    };
    return Dashboard;
}());
Dashboard = __decorate([
    core_1.Component({
        templateUrl: './dashboard.view.html'
    })
], Dashboard);
exports.Dashboard = Dashboard;
//# sourceMappingURL=dashboard.component.js.map