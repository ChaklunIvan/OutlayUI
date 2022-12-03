import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsByDescriptionComponent } from './stats-by-description.component';

describe('StatsByDescriptionComponent', () => {
  let component: StatsByDescriptionComponent;
  let fixture: ComponentFixture<StatsByDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsByDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsByDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
