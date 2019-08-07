import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoEgComponent } from './two-eg.component';

describe('TwoEgComponent', () => {
  let component: TwoEgComponent;
  let fixture: ComponentFixture<TwoEgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoEgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoEgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
