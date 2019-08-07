import { SampleLibLoaded } from './sample-lib.actions';
import {
  SampleLibState,
  Entity,
  initialState,
  sampleLibReducer
} from './sample-lib.reducer';

describe('SampleLib Reducer', () => {
  const getSampleLibId = it => it['id'];
  let createSampleLib;

  beforeEach(() => {
    createSampleLib = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid SampleLib actions ', () => {
    it('should return set the list of known SampleLib', () => {
      const sampleLibs = [
        createSampleLib('PRODUCT-AAA'),
        createSampleLib('PRODUCT-zzz')
      ];
      const action = new SampleLibLoaded(sampleLibs);
      const result: SampleLibState = sampleLibReducer(initialState, action);
      const selId: string = getSampleLibId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = sampleLibReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
