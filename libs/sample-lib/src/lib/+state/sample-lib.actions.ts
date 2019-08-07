import { Action } from '@ngrx/store';
import { Entity } from './sample-lib.reducer';

export enum SampleLibActionTypes {
  LoadSampleLib = '[SampleLib] Load SampleLib',
  SampleLibLoaded = '[SampleLib] SampleLib Loaded',
  SampleLibLoadError = '[SampleLib] SampleLib Load Error'
}

export class LoadSampleLib implements Action {
  readonly type = SampleLibActionTypes.LoadSampleLib;
}

export class SampleLibLoadError implements Action {
  readonly type = SampleLibActionTypes.SampleLibLoadError;
  constructor(public payload: any) {}
}

export class SampleLibLoaded implements Action {
  readonly type = SampleLibActionTypes.SampleLibLoaded;
  constructor(public payload: Entity[]) {}
}

export type SampleLibAction =
  | LoadSampleLib
  | SampleLibLoaded
  | SampleLibLoadError;

export const fromSampleLibActions = {
  LoadSampleLib,
  SampleLibLoaded,
  SampleLibLoadError
};
