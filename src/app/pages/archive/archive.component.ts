import { Component, OnInit } from '@angular/core';

import { walletRadialChart, overviewChart, transactionsData, bitconinChart  } from './data';

import { ChartType, Transactions } from './archive.model';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  walletRadialChart: ChartType;
  overviewChart: ChartType;
  bitconinChart: ChartType; 

  walletBalanceData: Array<Object>;

  transactionsData: Transactions[];


  constructor( ) { }


  ngOnInit(): void {
    this.breadCrumbItems = [{ label: '' }, { label: 'Archive', active: true }];
     
    this._fetchData();

  }


  
  
  private _fetchData() {
    this.walletRadialChart = walletRadialChart;
    this.overviewChart = overviewChart;
    this.transactionsData = transactionsData;
    this.bitconinChart = bitconinChart; 
    this._fetchChartData();
  }

private _fetchChartData() {
    this.walletBalanceData=[{
      "text": "Total Dollars",
      "amount": "$ 6134.39",
      "subamount": "+ 0.0012.23 ( 0.2 % )",
      "income": "$ 2632.46",
      "expense": "$ 924.38",
      "chartSeries": [76, 67, 61,88],
      "balancelist": [{
          "text": "Identify",
          "coin": "4.5701",
          "amount": "$ 1123.64"
        },
        {
          "text": "Discover",
          "coin": "0.4412",
          "amount": "$ 4025.32"
        },
        {
          "text": "Advise",
          "coin": "35.3811",
          "amount": "$ 2263.09"
        }

        ,
        {
          "text": "Closed",
          "coin": "25.3811",
          "amount": "$ 1263.09"
        }
      ]
    }];
  }
  getBalanceData(data) {
    let month = data.target.value;
    switch (month) {
      case "january":
        this.walletBalanceData = [
          {
            text: "Total Dollars",
            amount: "$ 1211.39",
            subamount: "+ 0.0014.23 ( 0.2 % )",
            income: "$ 468.46",
            expense: "$ 127.38",
            chartSeries: [47, 68, 49,55],
            balancelist: [
              {
                text: "Identify",
                coin: "2.5701",
                amount: "$ 723.64",
              },
              {
                text: "Discover",
                coin: "0.8552",
                amount: "$ 1225.32",
              },
              {
                text: "Advise",
                coin: "35.7411 ",
                amount: "$ 4563.09",
              },   {
                text: "Closed",
                coin: "2.7411 ",
                amount: "$ 463.09",
              },
            ],
          },
        ];
        break;
      case "february":
        this.walletBalanceData = [
          {
            text: "Total Dollars",
            amount: "$ 2111.39",
            subamount: "+ 0.0014.23 ( 0.2 % )",
            income: "$ 2168.46",
            expense: "$ 927.38",
            chartSeries: [38, 78, 48,25],
            balancelist: [
              {
                text: "Identify",
                coin: "2.5701",
                amount: "$ 1123.64",
              },
              {
                text: "Discover",
                coin: "0.8552",
                amount: "$ 4025.32",
              },
              {
                text: "Advise",
                coin: "35.7411 ",
                amount: "$ 2263.09",
              },   {
                text: "Closed",
                coin: "3.7411 ",
                amount: "$ 763.09",
              },
            ],
          },
        ]
        break;
      case "march":
        this.walletBalanceData = [
          {
            text: "Total Dollars",
            amount: "$ 1011.39",
            subamount: "+ 0.0014.23 ( 0.2 % )",
            income: "$ 6668.46",
            expense: "$ 4027.38",
            chartSeries: [36, 58, 78,47],
            balancelist: [
              {
                text: "Identify",
                coin: "2.5701",
                amount: "$ 523.64",
              },
              {
                text: "Discover",
                coin: "0.8552",
                amount: "$ 1025.32",
              },
              {
                text: "Advise",
                coin: "14.7411 ",
                amount: "$ 6563.09",
              },
              {
                text: "Closed",
                coin: "8.7411 ",
                amount: "$ 563.09",
              },
            ],
          }
        ];
        break;
      case "december":
        this.walletBalanceData = [
          {
            text: "Total Dollars",
            amount: "$ 1011.39",
            subamount: "+ 0.0014.23 ( 0.2 % )",
            income: "$ 668.46",
            expense: "$ 427.38",
            chartSeries: [25, 58, 47,38],
            balancelist: [
              {
                text: "Identify",
                coin: "2.5701",
                amount: "$ 523.64",
              },
              {
                text: "Discover",
                coin: "0.8552",
                amount: "$ 1025.32",
              },
              {
                text: "Advise",
                coin: "14.7411 ",
                amount: "$ 6563.09",
              },{
                text: "Closed",
                coin: "8.7411 ",
                amount: "$ 4463.09",
              },
            ],
          },

        ]
        break;
    }
  }
}
