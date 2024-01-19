import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieStarRateComponent } from './movie-star-rate.component';
import { GenericPipeModule } from 'src/app/utils/generic-pipe/generic-pipe.module';
import { By } from '@angular/platform-browser';

describe('MovieStarRateComponent', () => {
  let component: MovieStarRateComponent;
  let fixture: ComponentFixture<MovieStarRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieStarRateComponent ],
      imports: [IonicModule.forRoot(), GenericPipeModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieStarRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show at least 1 star with a movieRate with 5 as a value', () => {
    component.movieRate = 5;
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('ion-icon').style.color).not.toBe('inherit')
    expect(compiled.querySelector('ion-icon')).toBeTruthy();
  });

  it('should not show any filled stars with a movieRate with 0 as a value', () => {
    component.movieRate = 0;
    const compiled = fixture.debugElement.nativeElement; 
    fixture.detectChanges();
    expect(compiled.querySelector('ion-icon').style.color).toBe('inherit');
  });
});
