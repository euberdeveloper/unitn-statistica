import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-get-solution-progress',
  templateUrl: './get-solution-progress.component.html',
  styleUrls: ['./get-solution-progress.component.scss']
})
export class GetSolutionProgressComponent implements OnInit {

  @Input() progress = 0;

  constructor() { }

  ngOnInit() {
  }

}
