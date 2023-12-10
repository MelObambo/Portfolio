import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TechIntelligencesComponent } from './tech-intelligences/tech-intelligences.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'tech_intelligence', component: TechIntelligencesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
