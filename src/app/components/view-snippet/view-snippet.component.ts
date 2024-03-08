import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-view-snippet',
  standalone: true,
  imports: [],
  templateUrl: './view-snippet.component.html',
  styleUrl: './view-snippet.component.css'
})
export class ViewSnippetComponent {
  codeSnippet = {
    title: "",
    code: ""
  };
  constructor(private router: ActivatedRoute, private dbService: DbService) { }

  ngOnInit() {
    const docId = this.router.snapshot.paramMap.get('id');
    if (docId) {
      this.dbService.getSnippetById(docId!).then((data: any) => {
        this.codeSnippet = data;
      })
    } else {
      alert("Error while fatching id from url");
    }
  }
}
