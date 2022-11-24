import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FuseNavigationItem } from '@fuse/components/navigation';
import { VariableService } from 'app/services/variable.service';
import { Subject } from 'rxjs';
import { Capacitor } from '@capacitor/core';
import { Browser } from '@capacitor/browser';

@Component({
    selector: 'privacy-policy',
    templateUrl: './faq.component.html',
    encapsulation: ViewEncapsulation.None
})
export class FaqComponent {
    
    constructor(
        public variableService: VariableService,
        private _router: Router
    ) {
    }

    goHome(): void {
        this._router.navigate(['home']);
    }
}
