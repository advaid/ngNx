import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { SampleLibEffects } from './sample-lib.effects';
import { LoadSampleLib, SampleLibLoaded } from './sample-lib.actions';

describe('SampleLibEffects', () => {
  let actions: Observable<any>;
  let effects: SampleLibEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        SampleLibEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(SampleLibEffects);
  });

  describe('loadSampleLib$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadSampleLib() });
      expect(effects.loadSampleLib$).toBeObservable(
        hot('-a-|', { a: new SampleLibLoaded([]) })
      );
    });
  });
});
