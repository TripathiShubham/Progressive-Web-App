"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var dashboard_component_1 = require("./Dashboard/dashboard.component");
var addEmployee_component_1 = require("./AddEmployee/addEmployee.component");
var appRoutes = [
    { path: 'dashboard', component: dashboard_component_1.Dashboard },
    { path: 'add', component: addEmployee_component_1.AddEmployee },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule, router_1.RouterModule.forRoot(appRoutes)
        ],
        exports: [
            router_1.RouterModule
        ],
        declarations: [
            dashboard_component_1.Dashboard, addEmployee_component_1.AddEmployee
        ]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map