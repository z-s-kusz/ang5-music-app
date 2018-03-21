import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-album-tables',
  templateUrl: './album-tables.component.html',
  styleUrls: ['./album-tables.component.css']
})
export class AlbumTablesComponent {
  @Input() collectedByDate: Array<any>;
  @Input() allReleaseDates: Array<any>;

  constructor() { }

}
