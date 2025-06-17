import { Injectable } from '@angular/core';
import {SnackbarComponent} from '../components/snackbar/snackbar.component';


@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private snackbarComponent!: SnackbarComponent;

  registerSnackbar(snackbar: SnackbarComponent) {
    this.snackbarComponent = snackbar;
  }

  show(message: string, type: 'success' | 'error' | 'info' = 'info') {
    if (this.snackbarComponent) {
      this.snackbarComponent.showSnackbar(message, type);
    }
  }
}
