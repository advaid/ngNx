import { Entity, SampleLibState } from './sample-lib.reducer';
import { sampleLibQuery } from './sample-lib.selectors';

describe('SampleLib Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getSampleLibId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createSampleLib = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      sampleLib: {
        list: [
          createSampleLib('PRODUCT-AAA'),
          createSampleLib('PRODUCT-BBB'),
          createSampleLib('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('SampleLib Selectors', () => {
    it('getAllSampleLib() should return the list of SampleLib', () => {
      const results = sampleLibQuery.getAllSampleLib(storeState);
      const selId = getSampleLibId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedSampleLib() should return the selected Entity', () => {
      const result = sampleLibQuery.getSelectedSampleLib(storeState);
      const selId = getSampleLibId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = sampleLibQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = sampleLibQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
