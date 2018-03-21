import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  artists: Array<object> = [];
  newArtist: string = '';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.artists = this.dataService.artists;
  }

  inputChange($event) {
    this.newArtist = $event.target.value;
  }

  deleteArtist(artist) {
    this.dataService.deleteArtist(artist);
    this.artists = this.dataService.artists;
  }

  addArtist(newArtist) {
    this.dataService.addArtist(newArtist);
    this.artists = this.dataService.artists;
    this.newArtist = '';
  }

  editArtist($event, id) {
    const updatedValue = {
      name: $event.target.value,
      id: id
    };
    this.dataService.editArtist(updatedValue);
    this.artists = this.dataService.artists;
  }

}
