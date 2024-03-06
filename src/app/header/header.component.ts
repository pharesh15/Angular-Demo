import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, booleanAttribute, input, numberAttribute } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { user } from '../model/User';
import { CountryCodePipe } from '../pipes/country-code.pipe';

function transformName(value: string) {
  return "Hii " + value + ".";
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule, CountryCodePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // name = "";

  // handleChange(e: Event) {
  //   this.name = (e.target as HTMLInputElement).value;
  // }

  // users = [
  //   { name: "Haresh Prajapati", age: 21, gender: "Male" },
  //   { name: "Manav Patel", age: 22, gender: "Male" },
  //   { name: "Mohit Chauhan", age: 22, gender: "Male" },
  // ];

  phone = 1234567890;

  @Input({ alias: "name", transform: transformName }) userName = "";
  @Input({ transform: booleanAttribute }) status!: boolean;
  @Input({ transform: numberAttribute }) salary!: number;

  @Output() myEvent = new EventEmitter<user>();
  sendData() {
    this.myEvent.emit({ name: "Vishnu Prajapati", salary: 60000 });
  }
}
