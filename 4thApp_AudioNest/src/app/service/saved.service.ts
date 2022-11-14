import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SavedService {
  public savedList: any = [];
  public songList = new BehaviorSubject<any>([]);
  constructor() { }
  getSongs() {
    return this.songList.asObservable();
  }

  addtoSaved(song: any) {
    this.savedList.push(song);
    this.songList.next(this.savedList);
    console.log(this.savedList)
  }

  removeSaved(song: any) {
    this.savedList.map((a: any, index: any) => {
      if (song.id === a.id) {
        this.savedList.splice(index, 1);
      } })
    this.songList.next(this.savedList);
  }
  removeAllSongs() {
    this.savedList = []
    this.songList.next(this.savedList);
  }
}
