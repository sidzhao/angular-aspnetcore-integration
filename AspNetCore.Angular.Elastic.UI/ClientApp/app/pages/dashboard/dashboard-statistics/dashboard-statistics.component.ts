import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ROUTE_TRANSITION, State, getLayout } from '@daybreaksoft/angular-elastic-ui';
import { Store } from '@ngrx/store';

@Component({
  selector: 'vr-dashboard-statistics',
  templateUrl: './dashboard-statistics.component.html',
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class DashboardStatisticsComponent implements OnInit {

  @Input() hideHeader: boolean;

  layoutGap = {
    'lt-md': '16px',
    'gt-md': '24px'
  };

  flexWidth = {
    'lt-sm': 'auto',
    'gt-sm': `calc(50% - ${this.layoutGap['lt-md']}`,
    'gt-md': `calc(50% - ${this.layoutGap['gt-md']}`
  };

  layout: string;

  layoutColumnOnBoxed = 'row';

  constructor(
    private store: Store<State>,
    private cd: ChangeDetectorRef
    ) { }

  ngOnInit() {
    this.store.select(getLayout).subscribe((layout) => {
      this.layout = layout;

      if (layout === 'gamma') {
        this.layoutColumnOnBoxed = 'column';
      } else {
        this.layoutColumnOnBoxed = 'row';
      }

      this.cd.markForCheck();
    });
  }

}
