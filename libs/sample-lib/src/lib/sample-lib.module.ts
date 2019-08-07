import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  SAMPLELIB_FEATURE_KEY,
  initialState as sampleLibInitialState,
  sampleLibReducer
} from './+state/sample-lib.reducer';
import { SampleLibEffects } from './+state/sample-lib.effects';
import { SampleLibFacade } from './+state/sample-lib.facade';
import { NxModule } from '@nrwl/angular';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),

    NxModule.forRoot(),

    StoreModule.forRoot(
      { sampleLib: sampleLibReducer },
      {
        initialState: { sampleLib: sampleLibInitialState },
        metaReducers: !environment.production ? [storeFreeze] : []
      }
    ),

    EffectsModule.forRoot([SampleLibEffects]),

    !environment.production ? StoreDevtoolsModule.instrument() : [],

    StoreRouterConnectingModule
  ],
  providers: [SampleLibFacade]
})
export class SampleLibModule {}
