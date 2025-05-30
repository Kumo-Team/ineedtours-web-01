import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { TransferSelectionComponent } from './components/transfer-selection/transfer-selection.component';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { InfoSectionComponent } from './components/info-section/info-section.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TransferSelectionComponent,
    ActivityListComponent,
    NavMenuComponent,
    InfoSectionComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
