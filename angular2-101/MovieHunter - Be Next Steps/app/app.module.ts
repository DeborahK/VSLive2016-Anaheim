import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { StarComponent } from './shared/star.component';
import { MovieListComponent } from './movies/movie-list.component';
import { MovieFilterPipe } from './movies/movie-filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'movies', component: MovieListComponent },
      { path: '', redirectTo: 'movies', pathMatch: 'full'}
    ])
  ],
  declarations: [
    AppComponent,
    StarComponent,
    MovieListComponent,
    MovieFilterPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
