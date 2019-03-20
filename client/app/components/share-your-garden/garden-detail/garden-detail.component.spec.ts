import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenDetailComponent } from './garden-detail.component';

describe('GardenDetailComponent', () => {
  let component: GardenDetailComponent;
  let fixture: ComponentFixture<GardenDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GardenDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GardenDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
