import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { user } from './model/User';
import { JokesComponent } from './components/jokes/jokes.component';
import { CounterComponentAComponent } from './components/counter-component-a/counter-component-a.component';
import { CounterComponentBComponent } from './components/counter-component-b/counter-component-b.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../firebaseConfig';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, JokesComponent, CounterComponentAComponent, CounterComponentBComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {
    initializeApp(firebaseConfig);
  }

  title = 'my-angular-app';

  // receivedData(userData: user) {
  //   console.log(userData);
  // }


}
