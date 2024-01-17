import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'movie-star-rate',
  templateUrl: './movie-star-rate.component.html',
  styleUrls: ['./movie-star-rate.component.scss'],
})
export class MovieStarRateComponent implements OnInit {
  @Input() movieRate = 0;
  @Output() movieRateChanged = new EventEmitter<number>();
  @Input() showOnly = false;

  rates: any
  constructor() { }

  ngOnInit() { }

  getRates = (defaultRate: number): Array<{rate: number, painted: boolean}> => {
    debugger;
    let rates = [
      {
        rate: 1, painted: false
      },
      {
        rate: 2, painted: false
      },
      {
        rate: 3, painted: false
      },
      {
        rate: 4, painted: false
      },
      {
        rate: 5, painted: false
      },
    ]
    rates.forEach((r:any) => {
      if(r.rate <= defaultRate){
        r.painted = true
      }
    })
    return rates;
  }

  rate(rateNumber: number) {
    this.movieRate = rateNumber
    this.movieRateChanged.emit(rateNumber);
  }

}
