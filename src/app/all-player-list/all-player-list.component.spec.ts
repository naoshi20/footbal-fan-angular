import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AllPlayerListComponent } from './all-player-list.component'

describe('PlayerListComponent', () => {
  let component: AllPlayerListComponent
  let fixture: ComponentFixture<AllPlayerListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllPlayerListComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(AllPlayerListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
