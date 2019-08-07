import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { SampleLibPartialState } from './sample-lib.reducer';
import { sampleLibQuery } from './sample-lib.selectors';
import { LoadSampleLib } from './sample-lib.actions';

@Injectable()
export class SampleLibFacade {
  loaded$ = this.store.pipe(select(sampleLibQuery.getLoaded));
  allSampleLib$ = this.store.pipe(select(sampleLibQuery.getAllSampleLib));
  selectedSampleLib$ = this.store.pipe(
    select(sampleLibQuery.getSelectedSampleLib)
  );

  constructor(private store: Store<SampleLibPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadSampleLib());
  }
}
