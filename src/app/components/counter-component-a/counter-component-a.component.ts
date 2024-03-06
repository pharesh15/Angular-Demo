import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counter-component-a',
  standalone: true,
  imports: [],
  templateUrl: './counter-component-a.component.html',
  styleUrl: './counter-component-a.component.css'
})
export class CounterComponentAComponent {
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
