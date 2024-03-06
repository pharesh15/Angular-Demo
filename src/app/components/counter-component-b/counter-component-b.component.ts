import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { CounterComponentBsubComponent } from '../counter-component-bsub/counter-component-bsub.component';

@Component({
  selector: 'app-counter-component-b',
  standalone: true,
  imports: [CounterComponentBsubComponent],
  providers: [CounterService],
  templateUrl: './counter-component-b.component.html',
  styleUrl: './counter-component-b.component.css'
})
export class CounterComponentBComponent {
  constructor(private counterService: CounterService) { }

  getServiceCount() {
    return this.counterService.getCount();
  }

  incrementServiceCount() {
    return this.counterService.incrementCount();
  }

  decrementServiceCount() {
    return this.counterService.decrementCount();
  }
}
