import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-get-solution-notes',
  templateUrl: './get-solution-notes.component.html',
  styleUrls: ['./get-solution-notes.component.scss']
})
export class GetSolutionNotesComponent implements OnInit {

  @Input() notes: string;

  constructor() { }

  ngOnInit() {
  }

}
