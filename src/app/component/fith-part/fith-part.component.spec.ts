import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FithPartComponent } from './fith-part.component';

describe('FithPartComponent', () => {
  let component: FithPartComponent;
  let fixture: ComponentFixture<FithPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FithPartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FithPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
