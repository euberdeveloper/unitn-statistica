import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-get-solution-solution',
  templateUrl: './get-solution-solution.component.html',
  styleUrls: ['./get-solution-solution.component.scss']
})
export class GetSolutionSolutionComponent implements OnInit {

  @Input() solutions: number[];

  constructor() { }

  ngOnInit() {
  }

}
