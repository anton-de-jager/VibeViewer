import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'refresh',
    templateUrl: './refresh.component.html',
    encapsulation: ViewEncapsulation.None
})
export class RefreshComponent {
    
    constructor(
        private _router: Router
    ) {
        this._router.navigateByUrl('home');
    }
}
