import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechIntelligenceComponent } from './tech-intelligence.component';

describe('TechIntelligenceComponent', () => {
  let component: TechIntelligenceComponent;
  let fixture: ComponentFixture<TechIntelligenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechIntelligenceComponent]
    });
    fixture = TestBed.createComponent(TechIntelligenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
