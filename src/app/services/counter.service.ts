import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private count = 0;

  getCount() {
    return this.count;
  }

  incrementCount() {

    return ++this.count;
  }

  decrementCount() {
    if (this.count > 0) {
      return --this.count;
    }
    return this.count;
  }
}
