import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { IMovie } from 'src/app/interfaces/movie.model';
import { RequestErrorResponse } from 'src/app/interfaces/request-error-response.model';
import { MovieService } from 'src/app/services/movie.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'edit-movie',
  templateUrl: './edit-movie.page.html',
  styleUrls: ['./edit-movie.page.scss'],
})
export class EditMoviePage implements OnInit {
  movieToEdit: IMovie = {};
  movieForSaving: IMovie = {}

  constructor(
    private movieService: MovieService,
    private navCtrl: NavController,
    private toastService: ToastService,
    public activatedRoute : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        const realMovie: any = (this.router.getCurrentNavigation()?.extras?.state??['movie']);
        this.movieToEdit = realMovie['movie'] as IMovie;

        this.movieForSaving = {
          releaseDate: new Date().toISOString(),
          rate: this.movieToEdit.rate,
          cover: this.movieToEdit.cover,
          title: this.movieToEdit.title,
          description: this.movieToEdit.description
        }
      }
    });
  }

  onMovieRateChange(newRate: number) {
    this.movieForSaving.rate = newRate;
  }

  async updateMovie(formMovie: NgForm) {
    console.log(this.movieForSaving)
    if(!this.validateMovieForm(formMovie)){
      return;
    } 

    this.movieService.updateMovie({...this.movieForSaving, _id: this.movieToEdit._id}).then(resp => {
      if(resp.ok){
        this.navCtrl.navigateRoot('/home', {animated: true});
      } else {
        console.log((resp as RequestErrorResponse).error);
        this.toastService.presentToast('Something went wrong', 'danger');
      }
    });
  }

  goToHome(){
    this.router.navigate(['/home'], {replaceUrl: true});
  }

  validateMovieForm(formReg: NgForm) {
    if (formReg.form.controls['title'].errors?.['required']){
      this.toastService.presentToast('Title is mandatory.', 'tertiary', 'top');
      return false;
    } else if(formReg.form.controls['description'].errors?.['required']){
      this.toastService.presentToast('Description is mandatory', 'tertiary');
      return false;
    } else {
      return true;
    }
  }

}
