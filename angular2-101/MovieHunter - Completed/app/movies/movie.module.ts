import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { movieRouting } from './movie.routing';
import { MovieListComponent } from './movie-list.component';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieFilterPipe } from './movie-filter.pipe';
import { MovieService } from './movie.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    movieRouting
  ],
  declarations: [
    MovieListComponent,
    MovieDetailComponent,
    MovieFilterPipe
  ],
  providers: [
    MovieService
  ]
})
export class MovieModule {}
