import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReceptionComponent } from './reception/reception.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ProjectsComponent } from './projects/projects.component';
import { TechIntelligenceComponent } from './tech-intelligence/tech-intelligence.component';
import { TechIntelligencesComponent } from './tech-intelligences/tech-intelligences.component';
import { TechIntelligenceSenderComponent } from './tech-intelligence-sender/tech-intelligence-sender.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceptionComponent,
    PresentationComponent,
    ProjectsComponent,
    TechIntelligenceComponent,
    TechIntelligencesComponent,
    TechIntelligenceSenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
