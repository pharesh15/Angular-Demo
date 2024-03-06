import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponentBsubComponent } from './counter-component-bsub.component';

describe('CounterComponentBsubComponent', () => {
  let component: CounterComponentBsubComponent;
  let fixture: ComponentFixture<CounterComponentBsubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponentBsubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CounterComponentBsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
