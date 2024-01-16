import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'movie-star-rate',
  templateUrl: './movie-star-rate.component.html',
  styleUrls: ['./movie-star-rate.component.scss'],
})
export class MovieStarRateComponent implements OnInit {
  @Input() movieRate = 0;
  @Output() movieRateChanged = new EventEmitter<number>();

  rates = [
    {
      rate: 0, painted: false
    },
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
  ]
  constructor() { }

  ngOnInit() {
    this.setRates();
  }

  setRates() {
    this.rates.forEach(r => {
      if(r.rate < this.movieRate - 1){
        r.painted = true
      }
    })
  }

  rate(rateNumber: number) {
    this.movieRateChanged.emit(rateNumber);
  }

}
