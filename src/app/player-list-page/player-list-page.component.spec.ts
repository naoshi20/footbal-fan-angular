import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PlayerListPageComponent } from './player-list-page.component'

describe('PlayerListComponent', () => {
  let component: PlayerListPageComponent
  let fixture: ComponentFixture<PlayerListPageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerListPageComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(PlayerListPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
