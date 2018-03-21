import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AlbumTablesComponent } from './album-tables/album-tables.component';
import { AnticipatedAlbumsService } from './anticipated-albums.service';
import { ArtistsComponent } from './artists/artists.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumTablesComponent,
    ArtistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
      AnticipatedAlbumsService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
