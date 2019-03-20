import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenFormularComponent } from './garden-formular.component';

describe('GardenFormularComponent', () => {
  let component: GardenFormularComponent;
  let fixture: ComponentFixture<GardenFormularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GardenFormularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GardenFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
