import { Component } from '@angular/core';
import { MediaReplayService } from '@daybreaksoft/angular-elastic-ui';

@Component({
  selector: 'vr-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  //noinspection JSUnusedLocalSymbols
  constructor(
    mediaReplay: MediaReplayService // workaround for Flex-Layout to receive the initial value
  ) {
    // Nothing here.
    // You probably want to go to /core/layout/ :)
  }
}
