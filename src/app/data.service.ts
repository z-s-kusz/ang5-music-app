import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

    // simulate a bad database
    artists: Array<object> = [
        {name:'Beck', id: 0},
        {name:'Lady Gaga', id: 1},
        {name:'The Mars Volta', id: 2},
        {name:'RJD2', id:4},
        {name:'Daikaiju', id:5}
    ];
    IDIndex = 6;

    constructor(private http: HttpClient) {

    }

    getAlbums() {
        return this.http.get('/anticipatedAlbums/getAlbums');
    }

    addArtist(artist:string) {
        const newArtist = {
            name: artist,
            id: this.IDIndex
        };
        this.IDIndex++;
        this.artists.push(newArtist);
    }

    deleteArtist(artist) {
        this.artists = this.artists.filter(filterArtist => {
            return filterArtist['id'] !== artist.id;
        });
    }

    editArtist(artist) {
        this.artists.forEach(filterArtist => {
            if (filterArtist['id'] === artist.id) filterArtist['name'] = artist.name; 
        });
    }

}
