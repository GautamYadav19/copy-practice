import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSilderComponent } from './image-silder.component';

describe('ImageSilderComponent', () => {
  let component: ImageSilderComponent;
  let fixture: ComponentFixture<ImageSilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageSilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageSilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
