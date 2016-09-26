import { Component } from '@angular/core';

import { IMovie } from './movie';

@Component({
    templateUrl: 'app/movies/movie-list.component.html',
    styleUrls: ['app/movies/movie-list.component.css']
})
export class MovieListComponent {
    pageTitle: string = 'Movie List';
    listFilter: string = '';
    showImage: boolean = false;
    movies: IMovie[];
    errorMessage: string;

    constructor() {
        this.movies = this.getMovies();
    }

    getMovies() {
        return [
            {
                director: 'Peter Jackson',
                description: 'A meek hobbit of the Shire and eight companions set out on a journey to Mount Doom to destroy the One Ring and the dark lord Sauron.',
                imageurl: 'http://www.coverwhiz.com/content/The-Lord-Of-The-Rings-The-Fellowship-Of-The-Ring_small.jpg',
                movieId: 1,
                mpaa: 'pg-13',
                releaseDate: '2001-12-19T00:00:00',
                title: 'The Lord of the Rings: The Fellowship of the Ring',
                price: 12.95,
                starRating: 4.88,
                approvalRating: 0.97
            },
            {
                director: 'Peter Jackson',
                description: 'While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron\'s new ally, Saruman, and his hordes of Isengard.',
                imageurl: 'http://www.coverwhiz.com/content/The-Lord-Of-The-Rings-The-Two-Towers_small.jpg',
                movieId: 2,
                mpaa: 'pg-13',
                releaseDate: '2002-12-18T00:00:00',
                title: 'The Lord of the Rings: The Two Towers',
                price: 14.95,
                starRating: 4.2,
                approvalRating: 0.94
            }
        ];
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}
