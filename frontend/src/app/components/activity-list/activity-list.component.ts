import { Component } from '@angular/core';

interface Activity {
  name: string;
  description: string;
  price: number;
  location: string;
}

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent {
  activities: Activity[] = [
    { name: 'Tour París', description: 'Lo mejor de la ciudad', price: 100, location: 'París' },
    { name: 'Museo Roma', description: 'Arte e historia', price: 80, location: 'Roma' },
    { name: 'Visita Londres', description: 'Imperdible', price: 90, location: 'Londres' }
  ];
}
