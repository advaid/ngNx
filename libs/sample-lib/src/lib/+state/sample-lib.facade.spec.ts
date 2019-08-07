import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { SampleLibEffects } from './sample-lib.effects';
import { SampleLibFacade } from './sample-lib.facade';

import { sampleLibQuery } from './sample-lib.selectors';
import { LoadSampleLib, SampleLibLoaded } from './sample-lib.actions';
import {
  SampleLibState,
  Entity,
  initialState,
  sampleLibReducer
} from './sample-lib.reducer';

interface TestSchema {
  sampleLib: SampleLibState;
}

describe('SampleLibFacade', () => {
  let facade: SampleLibFacade;
  let store: Store<TestSchema>;
  let createSampleLib;

  beforeEach(() => {
    createSampleLib = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('sampleLib', sampleLibReducer, {
            initialState
          }),
          EffectsModule.forFeature([SampleLibEffects])
        ],
        providers: [SampleLibFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(SampleLibFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allSampleLib$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allSampleLib$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `SampleLibLoaded` to manually submit list for state management
     */
    it('allSampleLib$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allSampleLib$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new SampleLibLoaded([createSampleLib('AAA'), createSampleLib('BBB')])
        );

        list = await readFirst(facade.allSampleLib$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
