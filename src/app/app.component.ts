import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    @ViewChild('layoutDrawer', {read: ElementRef}) layoutDrawer: ElementRef;

    constructor(public renderer: Renderer,
                public router: Router) {}

    navdrawer(navTo: String) {
        const layout: any = document.querySelector('.mdl-layout');
        layout.MaterialLayout.toggleDrawer();
        this.router.navigate([navTo]);
    }
}
