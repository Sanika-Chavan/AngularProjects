import { Component, OnInit } from '@angular/core';
import { SavedService } from 'src/app/service/saved.service';

@Component({
  selector: 'app-saved-songs',
  templateUrl: './saved-songs.component.html',
  styleUrls: ['./saved-songs.component.scss']
})
export class SavedSongsComponent implements OnInit {
  public songs: any = [];
  id: any = 0;

  constructor(private saved: SavedService){ }

  ngOnInit(): void {
    this.saved.getSongs()
      .subscribe(res => {
        this.songs = res;
      })
  }

  removeSaved(item: any) {
    this.saved.removeSaved(item);
  }

  removeAllSongs() {
    this.saved.removeAllSongs();
  }

}
