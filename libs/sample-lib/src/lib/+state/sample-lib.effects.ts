import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { SampleLibPartialState } from './sample-lib.reducer';
import {
  LoadSampleLib,
  SampleLibLoaded,
  SampleLibLoadError,
  SampleLibActionTypes
} from './sample-lib.actions';

@Injectable()
export class SampleLibEffects {
  @Effect() loadSampleLib$ = this.dataPersistence.fetch(
    SampleLibActionTypes.LoadSampleLib,
    {
      run: (action: LoadSampleLib, state: SampleLibPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new SampleLibLoaded([]);
      },

      onError: (action: LoadSampleLib, error) => {
        console.error('Error', error);
        return new SampleLibLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<SampleLibPartialState>
  ) {}
}
