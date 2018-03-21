import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumTablesComponent } from './album-tables.component';

describe('AlbumTablesComponent', () => {
  let component: AlbumTablesComponent;
  let fixture: ComponentFixture<AlbumTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
