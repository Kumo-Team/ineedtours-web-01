import { Component } from '@angular/core';
import {TranslatePipe} from "../../pipes/translate.pipe";

@Component({
    selector: 'app-footer-desktop',
    standalone: true,
    templateUrl: './footer-desktop.component.html',
    imports: [
        TranslatePipe
    ],
    styleUrls: ['./footer-desktop.component.css']
})
export class FooterDesktopComponent {}
