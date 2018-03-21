import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Rx';
import { DataService } from '../data.service';
import { AlbumTablesComponent } from '../album-tables/album-tables.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  anticipatedAlbums: Array<any> = [];
  allReleaseDates: Array<string> = [];
  collectedByDate: Array<Array<Object>> = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums() {
    this.dataService.getAlbums().subscribe(
      data => {
        this.anticipatedAlbums = data['anticipatedAlbums'];
        this.allReleaseDates = data['allReleaseDates'];
        this.organizeAlbumsByDate(this.allReleaseDates, this.anticipatedAlbums);
      },
      err => {
        console.log('error in getAlbums home.component.ts', err);
      }
    );
  }

  organizeAlbumsByDate(dates, albums) {
    dates.forEach((date, i) => {
      this.collectedByDate.push([]); // make an empty array for this date collection
      albums.filter(album => {
        if (album.releaseDate === date) {
          this.collectedByDate[i].push(album); // push into this sub-array of collectionByDate
        }
      });
    });
  }

}
