import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoviesListComponent } from './movies-list.component';
import { By } from '@angular/platform-browser';
import { MovieStarRateModule } from 'src/app/pages/edit-movie/components/movie-star-rate/movie-star-rate.module';

describe('MoviesListComponent', () => {
  let component: MoviesListComponent;
  let fixture: ComponentFixture<MoviesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesListComponent ],
      imports: [IonicModule.forRoot(), MovieStarRateModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should show a movie', () => {
    component.movies = [{
      _id: 'random id',
      releaseDate: '2021-12-05',
      rate: 5,
      cover: 'test cover',
      title: 'test title',
      description: 'test description'
    }];
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('ion-item-sliding')).toBeTruthy();
    expect(fixture.debugElement.query(By.css(".movie-title")).nativeElement.innerHTML).toBe(component.movies[0].title);
  });

  it('should click in go to see details page, of a movie', () => {
    component.movies = [{
      _id: 'random id',
      releaseDate: '2021-12-05',
      rate: 5,
      cover: 'test cover',
      title: 'test title',
      description: 'test description'
    }];
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    spyOn(component, 'goToDetailsPage');    
    const btn = compiled.querySelector('ion-item');
    btn.click();
    expect(component.goToDetailsPage).toHaveBeenCalled();
  });
});
