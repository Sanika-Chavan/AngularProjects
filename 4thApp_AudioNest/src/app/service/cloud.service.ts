import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Howl } from 'howler';
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CloudService {
  files: any = [
    // tslint:disable-next-line: max-line-length
    {
      id: "1",
      imgSrc: "assets/AudioJpg/AlagAasmaan1.jpg",
      imgAlt: "Alag Aasmaan",
      url: "https://drive.google.com/file/d/1UROsoce-3cBblMTwrTdrlan3nfuM3HeF/view",
      name: " Alag Aasmaan",
      artist: "Anuv Jain"
    },
    {
      id: "2",
      imgSrc: "assets/AudioJpg/MeraSafar1.jpg",
      imgAlt: "MeraSafar",
      url: "https://drive.google.com/file/d/1USBml5MSPcCPApG-IdKHEJ8DNS42UVMD/view",
      name: "Mera Safar",
      artist: "Iqlipse Nova",
    },
    {
      id: "3",
      imgSrc: "assets/AudioJpg/ChaapTilak1.jpg",
      imgAlt: "Chaap Tilak",
      url: "https://drive.google.com/file/d/1UOdB4X-ujpNviYVFuZOTFIHMavSgQCpb/view",
      name: "Chaap Tilak",
      artist: "Jeffrey Iqbal"
    },
    {
      id: "4",
      imgSrc: "assets/AudioJpg/TutaPull1.jpg",
      imgAlt: "Tuta Pull Wahan",
      url: "https://drive.google.com/file/d/1UGdCP3qm_EHreuDfS2ckf3uovEUWLFjR/view",
      name: "Tuta Pull Wahan",
      artist: "Deepak Rathore Project"
    },
    {
      id:"5",
      imgSrc: "assets/AudioJpg/WohDin1.jpg",
      imgAlt: "WohDin",
      url: "https://drive.google.com/file/d/1UGdCP3qm_EHreuDfS2ckf3uovEUWLFjR/view",
      name: "Woh Din",
      artist: "Arjit Singh"
    },
    {
      id:"6",
      imgSrc: "assets/AudioJpg/WaktKiBaatein1.jpg",
      imgAlt: "Waqt Ki Baatein",
      url: "https://drive.google.com/file/d/1UGdCP3qm_EHreuDfS2ckf3uovEUWLFjR/view",
      name: "Waqt Ki Baatein",
      artist: "Dream note"
    },
    {
      id:"7",
      imgSrc: "assets/AudioJpg/BoloHarHar1.jpg",
      imgAlt: "Bolo Har Har",
      url: "https://drive.google.com/file/d/1UGdCP3qm_EHreuDfS2ckf3uovEUWLFjR/view",
      name: "Bolo Har Har",
      artist: "Mithoon"
    },
    {
      id:"8",
      imgSrc: "assets/AudioJpg/LoveYouZindagi1.jpg",
      imgAlt: "Love You Zindagi",
      url: "https://drive.google.com/file/d/1UGdCP3qm_EHreuDfS2ckf3uovEUWLFjR/view",
      name: "Love You Zindagi",
      artist: "Amit Trivedi"
    },
    {
      id:"9",
      imgSrc: "assets/AudioJpg/Parinda1.jpg",
      imgAlt: "Parinda",
      url: "https://drive.google.com/file/d/1UGdCP3qm_EHreuDfS2ckf3uovEUWLFjR/view",
      name: "Parinda",
      artist: "Amaal Mallik"
    },

  ];

  constructor(private http: HttpClient) {
   }
  getFiles() {
    return of(this.files);
  }

  createAudio(sound) {
    var pong = new Howl({
      src: [`../assets/Songs/${sound}.mp3`],
    });
    return pong;
  }

  playSong(au){
    au.play();
  }

  stopSong(au) {
    au.stop();
  }
  
  }


