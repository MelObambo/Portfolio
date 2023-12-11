import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechIntelligencesComponent } from './tech-intelligences.component';

describe('TechIntelligencesComponent', () => {
  let component: TechIntelligencesComponent;
  let fixture: ComponentFixture<TechIntelligencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechIntelligencesComponent]
    });
    fixture = TestBed.createComponent(TechIntelligencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
