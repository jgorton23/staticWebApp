import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExperienceComponent } from './experience/experience.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SingleExperienceComponent } from './experience/single-experience/single-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    PersonalInfoComponent,
    SingleExperienceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
