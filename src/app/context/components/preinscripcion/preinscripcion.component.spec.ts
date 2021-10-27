import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreinscripcionComponent } from './preinscripcion.component';

describe('PreinscripcionComponent', () => {
  let component: PreinscripcionComponent;
  let fixture: ComponentFixture<PreinscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreinscripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreinscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
