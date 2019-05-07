import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrocComponent } from './troc.component';

describe('TrocComponent', () => {
  let component: TrocComponent;
  let fixture: ComponentFixture<TrocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
