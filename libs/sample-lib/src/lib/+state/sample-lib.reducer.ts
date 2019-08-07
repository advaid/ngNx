import { SampleLibAction, SampleLibActionTypes } from './sample-lib.actions';

export const SAMPLELIB_FEATURE_KEY = 'sampleLib';

/**
 * Interface for the 'SampleLib' data used in
 *  - SampleLibState, and
 *  - sampleLibReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface SampleLibState {
  list: Entity[]; // list of SampleLib; analogous to a sql normalized table
  selectedId?: string | number; // which SampleLib record has been selected
  loaded: boolean; // has the SampleLib list been loaded
  error?: any; // last none error (if any)
}

export interface SampleLibPartialState {
  readonly [SAMPLELIB_FEATURE_KEY]: SampleLibState;
}

export const initialState: SampleLibState = {
  list: [],
  loaded: false
};

export function sampleLibReducer(
  state: SampleLibState = initialState,
  action: SampleLibAction
): SampleLibState {
  switch (action.type) {
    case SampleLibActionTypes.SampleLibLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
