import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SAMPLELIB_FEATURE_KEY, SampleLibState } from './sample-lib.reducer';

// Lookup the 'SampleLib' feature state managed by NgRx
const getSampleLibState = createFeatureSelector<SampleLibState>(
  SAMPLELIB_FEATURE_KEY
);

const getLoaded = createSelector(
  getSampleLibState,
  (state: SampleLibState) => state.loaded
);
const getError = createSelector(
  getSampleLibState,
  (state: SampleLibState) => state.error
);

const getAllSampleLib = createSelector(
  getSampleLibState,
  getLoaded,
  (state: SampleLibState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getSampleLibState,
  (state: SampleLibState) => state.selectedId
);
const getSelectedSampleLib = createSelector(
  getAllSampleLib,
  getSelectedId,
  (sampleLib, id) => {
    const result = sampleLib.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const sampleLibQuery = {
  getLoaded,
  getError,
  getAllSampleLib,
  getSelectedSampleLib
};
