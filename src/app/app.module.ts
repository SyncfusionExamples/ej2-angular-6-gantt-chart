import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GanttModule, ResizeService, SortService, FilterService, SelectionService, ReorderService,
  EditService, DayMarkersService, ToolbarService } from '@syncfusion/ej2-angular-gantt';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
     GanttModule
  ],
  providers: [ResizeService, SortService, FilterService, SelectionService, ReorderService, EditService, DayMarkersService, ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
