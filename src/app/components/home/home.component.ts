import { Component } from '@angular/core';
import { DbService } from '../../services/db.service';
import { Snippet } from '../../model/Snippet';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private dbSerivce: DbService) { }
  items: { id: string, title: string }[] = []
  ngOnInit() {
    this.dbSerivce.getAllSnippets().then((data: any) => {
      console.log(data);
      this.items = data;
    });
  }
}
