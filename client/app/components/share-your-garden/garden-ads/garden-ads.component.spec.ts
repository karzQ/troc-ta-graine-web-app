import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenAdsComponent } from './garden-ads.component';

describe('GardenAdsComponent', () => {
  let component: GardenAdsComponent;
  let fixture: ComponentFixture<GardenAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GardenAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GardenAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
