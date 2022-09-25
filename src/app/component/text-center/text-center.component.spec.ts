import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCenterComponent } from './text-center.component';

describe('TextCenterComponent', () => {
  let component: TextCenterComponent;
  let fixture: ComponentFixture<TextCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
