import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { YesComponent } from './yes/yes.component';
import { TwoEgComponent } from './two-eg/two-eg.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [AppComponent, YesComponent, TwoEgComponent, DemoComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'sample-lib',
          loadChildren: () =>
            import('@eg-workspace/sample-lib').then(
              module => module.SampleLibModule
            )
        }
      ],
      { initialNavigation: 'enabled' }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
