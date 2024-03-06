import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponentBComponent } from './counter-component-b.component';

describe('CounterComponentBComponent', () => {
  let component: CounterComponentBComponent;
  let fixture: ComponentFixture<CounterComponentBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponentBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CounterComponentBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
