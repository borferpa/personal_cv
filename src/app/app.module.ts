import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { MyheaderComponent } from './components/myheader/myheader.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { TimelinePointComponent } from './components/timeline-point/timeline-point.component';
import { TimelineUnitComponent } from './components/timeline-unit/timeline-unit.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    MyheaderComponent,
    AboutMeComponent,
    ContactMeComponent,
    TimelinePointComponent,
    TimelineUnitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
