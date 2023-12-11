import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechIntelligenceSenderComponent } from './tech-intelligence-sender.component';

describe('TechIntelligenceSenderComponent', () => {
  let component: TechIntelligenceSenderComponent;
  let fixture: ComponentFixture<TechIntelligenceSenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechIntelligenceSenderComponent]
    });
    fixture = TestBed.createComponent(TechIntelligenceSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
