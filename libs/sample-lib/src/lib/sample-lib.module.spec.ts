import { async, TestBed } from '@angular/core/testing';
import { SampleLibModule } from './sample-lib.module';

describe('SampleLibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SampleLibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SampleLibModule).toBeDefined();
  });
});
