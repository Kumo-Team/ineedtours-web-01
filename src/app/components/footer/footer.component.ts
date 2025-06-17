import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FooterDesktopComponent } from './footer-desktop.component';
import { FooterMobileComponent } from './footer-mobile.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIf, FooterDesktopComponent, FooterMobileComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isMobile = false;
  constructor(private breakpoint: BreakpointObserver) {}
  ngOnInit() {
    this.breakpoint.observe([Breakpoints.Handset]).subscribe(state => {
      this.isMobile = state.matches;
    });
  }
}
