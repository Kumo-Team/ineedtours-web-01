import { Component } from '@angular/core';

@Component({
  selector: 'app-transfer-selection',
  templateUrl: './transfer-selection.component.html',
  styleUrls: ['./transfer-selection.component.css']
})
export class TransferSelectionComponent {
  types = ['Aeropuerto', 'Puerto', 'Hotel'];
  origin = '';
  destination = '';
  date = '';
  time = '';
  passengers = 1;

  requiresTime(): boolean {
    return this.origin === 'Aeropuerto' || this.origin === 'Puerto' ||
           this.destination === 'Aeropuerto' || this.destination === 'Puerto';
  }
}
