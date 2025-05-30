import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query = '';
  suggestions: string[] = [];
  data = ['Tour a París', 'Excursión a Roma', 'Visita a Londres', 'Museo de Madrid'];

  onInput(event: any) {
    const value = event.target.value;
    this.query = value;
    if (value.length >= 3) {
      const lower = value.toLowerCase();
      this.suggestions = this.data.filter(d => d.toLowerCase().includes(lower));
    } else {
      this.suggestions = [];
    }
  }
}
