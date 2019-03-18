import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-get-solution-adsense',
  templateUrl: './get-solution-adsense.component.html',
  styleUrls: ['./get-solution-adsense.component.scss']
})
export class GetSolutionAdsenseComponent implements OnInit {

  time = 5;

  @Output('showSolution') private showSolutionEmitter = new EventEmitter<void>();
  private interval: any;

  constructor() { }

  ngOnInit() {
    interval(1000)
      .pipe(
        takeWhile( () => this.time > 0 )
      )
      .subscribe( () => this.time-- );
  }

  showSolution(): void {
    this.showSolutionEmitter.emit();
  }

}
