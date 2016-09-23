import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

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
    RouterModule.forChild([
      { path: 'movies', component: MovieListComponent },
      { path: 'movie/:id', component: MovieDetailComponent },
      { path: 'movieEdit/:id', component: MovieEditComponent },
      { path: 'movieEditReactive/:id', component: MovieEditReactiveComponent }
    ])
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
