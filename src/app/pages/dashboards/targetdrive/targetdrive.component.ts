import { Component, OnInit, ViewChild,ViewChildren, QueryList  } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { visitorsOptions, popularPostData, basicColumChart, litecoinChart} from "./data";
import { ChartType } from "./targetdrive.model";
import { ChartComponent } from "ng-apexcharts";

import { Observable } from 'rxjs';

import { Table } from './advanced.model';

import { tableData } from './tabledata';

import { AdvancedService } from './advanced.service';
import { AdvancedSortableDirective, SortEvent } from './advanced-sortable.directive';

@Component({
  selector: 'app-targetdrive',
  templateUrl: './targetdrive.component.html',
  styleUrls: ['./targetdrive.component.scss'],
  providers: [AdvancedService, DecimalPipe]
})

/**
 * Blog-dashboard component
 */
export class TargetDriveComponent implements OnInit {


  // visitor chart
  visitorsOptions: ChartType;
  popularPostData;
  public activeOptionButton = "all";
  // bread crumb items
  breadCrumbItems: Array<{}>;

  basicColumChart: ChartType;
  litecoinChart: ChartType;


  // Table data
  tableData: Table[];
  public selected: any;
  hideme: boolean[] = [];
  tables$: Observable<Table[]>;
  total$: Observable<number>;
  @ViewChildren(AdvancedSortableDirective) headers: QueryList<AdvancedSortableDirective>;
  @ViewChild("chart", { static: false }) chart: ChartComponent;
  public isCollapsed = true;
  constructor(public service: AdvancedService) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }
  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Dashboards' }, { label: 'Target Drive', active: true }];

    /**
     * Fetches the data
     */
    this._fetchData();

  }

  public updateOptionsData = {
    "1m": {
      series: [{
        name: 'Current',
        data: [12, 22, 38, 42, 32, 40, 51, 36, 51, 29, 38, 36],
    }, {
        name: 'Previous',
        data: [22, 31, 36, 26, 47, 56, 42, 64, 61, 52, 42, 31],
    }]
    },
    "6m": {
      series: [{
        name: 'Current',
        data: [31, 40, 28, 51, 42, 40, 51, 36, 40, 39, 31, 36],
    }, {
        name: 'Previous',
        data: [11, 32, 45, 32, 34, 22, 51, 60, 51, 52, 40, 31],
    }]
    },
    "1y": {
      series: [{
        name: 'Current',
        data: [28, 22, 38, 42, 32, 40, 51, 36, 51, 29, 38, 36],
    }, {
        name: 'Previous',
        data: [22, 31, 36, 26, 47, 56, 42, 64, 61, 52, 42, 31],
    }]
    },
    all: {
      series: [{
        name: 'Current',
        data: [18, 21, 45, 36, 65, 47, 51, 32, 40, 28, 31, 26]
    }, {
        name: 'Previous',
        data: [30, 11, 22, 18, 32, 23, 58, 45, 30, 36, 15, 34]
    }]
    }
  };

  updateOptions(option: any) {
    this.activeOptionButton = option;
    this.chart.updateOptions(this.updateOptionsData[option], false, true, true);
  }

  private _fetchData() {
    this.litecoinChart = litecoinChart;
    this.basicColumChart = basicColumChart;
    this.visitorsOptions = visitorsOptions;
    this.popularPostData = popularPostData;

    this.tableData = tableData;
    for (let i = 0; i <= this.tableData.length; i++) {
      this.hideme.push(true);
    }
  }

  /**
   * Sort table data
   * @param param0 sort the column
   *
   */
   onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
