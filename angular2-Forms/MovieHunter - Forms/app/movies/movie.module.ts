import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { movieRoutingModule } from './movie.routing';
import { MovieListComponent } from './movie-list.component';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieEditComponent } from './movie-edit.component';
import { MovieEditReactiveComponent } from './movie-edit-reactive.component';
import { MovieFilterPipe } from './movie-filter.pipe';
import { MovieService } from './movie.service';

@NgModule({
  imports: [
    ReactiveFormsModule,
    SharedModule,
    movieRoutingModule
  ],
  declarations: [
    MovieListComponent,
    MovieDetailComponent,
    MovieEditComponent,
    MovieEditReactiveComponent,
    MovieFilterPipe
  ],
  providers: [
    MovieService
  ]
})
export class MovieModule {}
