import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/service/audio.service';
import { CloudService } from 'src/app/service/cloud.service';
import { SavedService } from 'src/app/service/saved.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [AudioService, CloudService]
})
export class SearchComponent implements OnInit {
  searchStr!: string;
  public songList: any;
  public totalItem: number = 0;
  constructor(private audioService: AudioService, private cloud: CloudService, private saved:SavedService) {}

  ngOnInit(): void {
    this.cloud.getFiles()
      .subscribe(res => {
        this.songList = res;
      }),

      this.saved.getSongs()
      .subscribe(res => {
        this.totalItem = res.length;

      })
  }

  addtoSaved(item:any){
    this.saved.addtoSaved(item);
  }

  searchMusic() {
    this.audioService.searchMusic(this.searchStr)
      .subscribe(res => {
        console.log(res)
      })
  }

  playit(name){
  let x = this.cloud.createAudio(name)
    // window.open(url, "_blank")
  return x;
  }
  playSong(name: string){
    let y = this.playit(name);
    this.cloud.playSong(y)
  }
  stopSong(name){
    let z = this.playit(name);
    this.cloud.stopSong(z)
    }
}

