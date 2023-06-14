import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePlayerListComponent } from './favorite-player-list.component';

describe('FavoritePlayerListComponent', () => {
  let component: FavoritePlayerListComponent;
  let fixture: ComponentFixture<FavoritePlayerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritePlayerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritePlayerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
