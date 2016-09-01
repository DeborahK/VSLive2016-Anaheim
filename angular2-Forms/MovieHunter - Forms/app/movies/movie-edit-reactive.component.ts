import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { IMovie } from './movie';
import { MovieService } from './movie.service';
import { NumberValidators } from '../shared/number.validator';

@Component({
    templateUrl: 'app/movies/movie-edit-reactive.component.html'
})
export class MovieEditReactiveComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Edit Movie';
    editForm: FormGroup;
    formError: { [id: string]: string };
    private validationMessages: { [id: string]: { [id: string]: string } };
    movie: IMovie;
    errorMessage: string;
    private _subscriber: any;
    directors: FormArray;
    directorData: string[] = [];

    constructor(private fb: FormBuilder,
                private movieService: MovieService,
                private router: Router,
                private route: ActivatedRoute) {

        // Initialize strings
        this.formError = {
            'title': '',
            'directors': '',
            'starRating': '',
            'description': ''
        };

        this.validationMessages = {
            'title': {
                'required': 'Movie title is required',
                'minlength': 'Movie title must be at least three characters.',
                'maxlength': 'Movie title cannot exceed 50 characters.'
            },
            'starRating': {
                'range': 'Rate the movie between 1 (lowest) and 5 (highest).'
            }
        };
    }

    ngOnInit(): void {
        this._subscriber = this.route.params.subscribe(
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
        this.movieService.getMovie(id)
            .subscribe(
            (movie: IMovie) => this.onMovieRetrieved(movie),
            (error: any) => this.errorMessage = <any>error);
    }

    onMovieRetrieved(movie: IMovie) {
        this.movie = movie;

        if (this.movie.movieId === 0) {
            this.pageTitle = 'Add Movie (Reactive)';
        } else {
            this.pageTitle = `Edit Movie (Reactive): ${this.movie.title}`;
        }

        // The data currently only has one director
        this.directorData.push(this.movie.director);

        this.editForm = new FormGroup({
            title: new FormControl(this.movie.title,
                                    [Validators.required,
                                    Validators.minLength(3),
                                    Validators.maxLength(50)]),
            directors: this.buildDirectorArray(),
            starRating: new FormControl(this.movie.starRating,
                                    NumberValidators.range(1, 5)),
            description: new FormControl(this.movie.description)
        });

        // this.editForm = this.fb.group({
        //     title: [this.movie.title,
        //             [Validators.required,
        //             Validators.minLength(3),
        //             Validators.maxLength(50)]],
        //     directors: this.buildDirectorArray(),
        //     starRating: [this.movie.starRating,
        //         NumberValidators.range(1, 5)],
        //     description: [this.movie.description]
        // });

        this.editForm.valueChanges
            .subscribe(data => this.onValueChanged(data));
        // this.editForm.valueChanges
        //         .debounceTime(500)
        //         .subscribe(data => this.onValueChanged(data));
    }

    addDirector(): void {
        this.directors.push(this.buildDirector(''));
    }

    buildDirectorArray(): FormArray {
        this.directors = this.fb.array([this.buildDirector(this.directorData[0])]);
        return this.directors;
    }

    buildDirector(defaultValue: string): FormControl {
        return new FormControl(defaultValue);
    }

    onValueChanged(data: any) {
        for (let field in this.formError) {
            if (this.formError.hasOwnProperty(field)) {
                let hasError = this.editForm.controls[field].dirty &&
                    !this.editForm.controls[field].valid;
                this.formError[field] = '';
                if (hasError) {
                    for (let key in this.editForm.controls[field].errors) {
                        if (this.editForm.controls[field].errors.hasOwnProperty(key)) {
                            this.formError[field] += this.validationMessages[field][key] + ' ';
                        }
                    }
                }
            }
        }
    }

    saveMovie() {
         console.log(this.editForm);
         if (this.editForm.dirty && this.editForm.valid) {
            this.movie = this.editForm.value;
            alert(`Movie: ${JSON.stringify(this.editForm.value)}`);
        }
    }
}
