import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditScoringComponent } from './credit-scoring.component';

describe('CreditScoringComponent', () => {
  let component: CreditScoringComponent;
  let fixture: ComponentFixture<CreditScoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditScoringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreditScoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
