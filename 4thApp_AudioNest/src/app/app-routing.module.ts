import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './component/search/search.component';
import { AboutComponent } from './component/about/about.component';
import { SavedSongsComponent } from './component/saved-songs/saved-songs.component';

const routes: Routes = [
  {path:"", component:SearchComponent},
  {path:"About", component:AboutComponent},
  {path:"SavedSongs", component:SavedSongsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
