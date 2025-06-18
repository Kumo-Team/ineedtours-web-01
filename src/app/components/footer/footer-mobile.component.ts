import { Component } from '@angular/core';
import {TranslatePipe} from "../../pipes/translate.pipe";

@Component({
    selector: 'app-footer-mobile',
    standalone: true,
    templateUrl: './footer-mobile.component.html',
    imports: [
        TranslatePipe
    ],
    styleUrls: ['./footer-mobile.component.css']
})
export class FooterMobileComponent {}
