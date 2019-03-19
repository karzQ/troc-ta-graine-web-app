import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareYourGardenComponent } from './share-your-garden.component';

describe('ShareYourGardenComponent', () => {
  let component: ShareYourGardenComponent;
  let fixture: ComponentFixture<ShareYourGardenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareYourGardenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareYourGardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
