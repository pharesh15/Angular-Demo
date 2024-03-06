import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counter-component-bsub',
  standalone: true,
  imports: [],
  templateUrl: './counter-component-bsub.component.html',
  styleUrl: './counter-component-bsub.component.css'
})
export class CounterComponentBsubComponent {
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
