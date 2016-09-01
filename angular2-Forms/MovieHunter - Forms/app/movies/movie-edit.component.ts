import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { IMovie } from './movie';
import { MovieService } from './movie.service';

@Component({
    templateUrl: 'app/movies/movie-edit.component.html'
})
export class MovieEditComponent implements OnInit, OnDestroy {
    @ViewChild(NgForm) movieForm: NgForm;
    pageTitle: string = 'Edit Movie';
    movie: IMovie;
    errorMessage: string;
    enterDescription: boolean = true;
    private _subscriber: any;

    constructor(private _movieService: MovieService,
                private _router: Router,
                private _route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this._subscriber = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getMovie(id);
            }
        );
    }

    ngOnDestroy() {
        this._subscriber.unsubscribe();
    }

    getMovie(id: number) {
        this._movieService.getMovie(id)
            .subscribe(
            (movie: IMovie) => this.onMovieRetrieved(movie),
            (error: any) => this.errorMessage = <any>error);
    }

    onMovieRetrieved(movie: IMovie) {
        if (this.movieForm) {
            this.movieForm.resetForm();
        }
        this.movie = movie;
        if (this.movie.movieId === 0) {
            this.pageTitle = 'Add Movie (Template-driven)';
        } else {
            this.pageTitle = `Edit Movie (Template-driven): ${this.movie.title}`;
        }
    }

    saveMovie(editForm: NgForm) {
        console.log(editForm);
        if (editForm.dirty && editForm.valid) {
            alert(`Movie: ${JSON.stringify(editForm.value)}`);
        }
    }
}
