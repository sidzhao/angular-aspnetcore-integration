import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/table';
import { MatPaginator, MatSort } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import * as moment from 'moment';
import { ROUTE_TRANSITION } from '@daybreaksoft/angular-elastic-ui';

@Component({
  selector: 'vr-datatable',
  templateUrl: './datatable.component.html',
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class DatatableComponent implements OnInit, OnDestroy {

  scrollbar: any;

  displayedColumns = ['created', 'state', 'number', 'title'];
  exampleDatabase: ExampleHttpDao | null;
  dataSource: ExampleDataSource | null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(http: HttpClient) {
    this.exampleDatabase = new ExampleHttpDao(http);
  }

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase!,
      this.sort, this.paginator);
  }

  ngOnDestroy() {
  }
}

export interface GithubIssue {
  number: string;
  state: string;
  title: string;
  created: any;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDao {
  constructor(private http: HttpClient) {}

  getRepoIssues(sort: string, order: string, page: number): Observable<Object> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl =
      `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;
    return this.http.get(requestUrl);
  }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleHttpDao. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<GithubIssue> {
  // The number of issues returned by github matching the query.
  resultsLength = 0;
  isLoadingResults: boolean;
  isRateLimitReached: boolean;

  constructor(private _exampleDatabase: ExampleHttpDao,
              private _sort: MatSort,
              private _paginator: MatPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<GithubIssue[]> {
    const displayDataChanges = [
      this._sort.sortChange,
      this._paginator.page,
    ];

    // If the user changes the sort order, reset back to the first page.
    this._sort.sortChange.subscribe(() => {
      this._paginator.pageIndex = 0;
    });

    return Observable.merge(...displayDataChanges)
      .startWith(null)
      .switchMap(() => {
        this.isLoadingResults = true;
        return this._exampleDatabase.getRepoIssues(
          this._sort.active, this._sort.direction, this._paginator.pageIndex);
      })
      .catch(() => {
        // Catch if the GitHub API has reached its rate limit. Return empty result.
        this.isRateLimitReached = true;
        return Observable.of(null);
      })
      .map(result => {
        // Flip flag to show that loading has finished.
        this.isLoadingResults = false;
        return result;
      })
      .map(result => {
        if (!result) { return []; }

        this.isRateLimitReached = false;
        this.resultsLength = (<any>result).total_count;

        return this.readGithubResult(result);
      });


  }

  disconnect() {}

  private readGithubResult(result: any): GithubIssue[] {
    return result.items.map((issue:any) => {
      return {
        number: issue.number,
        created: moment(issue.created_at),
        state: issue.state,
        title: issue.title,
      };
    });
  }
}
