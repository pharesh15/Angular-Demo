import { Component } from '@angular/core';
import { JokesService } from '../../services/jokes.service';

@Component({
  selector: 'app-jokes',
  standalone: true,
  imports: [],
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.css'
})
export class JokesComponent {
  joke = "loading";
  constructor(private jokesService: JokesService) { }
  ngOnInit(): void {
    this.getAnotherJoke();
  }

  getAnotherJoke() {
    this.jokesService.getJoke().subscribe((data: any) => {
      if (data?.setup) {
        this.joke = data?.setup;
        if (data?.delivery) {
          this.joke = this.joke + data.delivery;
        }
      } else {
        this.joke = data?.joke;
        if (data?.delivery) {
          this.joke = this.joke + data.delivery;
        }
      }
    });
  }
}
