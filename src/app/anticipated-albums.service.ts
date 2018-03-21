import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AnticipatedAlbumsService {

    constructor(private http: HttpClient) {

    }

    getAlbums() {
        return this.http.get('/anticipatedAlbums/getAlbums');
    }

}
