import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponentAComponent } from './counter-component-a.component';

describe('CounterComponentAComponent', () => {
  let component: CounterComponentAComponent;
  let fixture: ComponentFixture<CounterComponentAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponentAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CounterComponentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
