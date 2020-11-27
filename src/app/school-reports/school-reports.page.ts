import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-school-reports',
  templateUrl: './school-reports.page.html',
  styleUrls: ['./school-reports.page.scss'],
})
export class SchoolReportsPage implements OnInit {
  chartOptions;
  mappedSchool;
  type ='lastmonth';
  tabs = [
    {
      name: "LABELS.LAST_MONTH",
      value: "lastmonth",
    },
    {
      name: "LABELS.LAST_QUARTER",
      value: "lastquarter",
    }
  ];

  constructor(
    public routerParam: ActivatedRoute
  ) {
    routerParam.params.subscribe(parametes => {
      this.mappedSchool = parametes;
    })
  }

  segmentChanged(event) {
    this.type = event.detail.value;
    this.setupChart();
  }
  ngOnInit() {
    this.setupChart();
  }
  public setupChart(){
    this.chartOptions = {
      title: {
        verticalAlign: 'middle',
        floating: true,
        text: '<b>' + 1 + ' % <br>Completed</b>'
      },
      yAxis: {
        min: 0,
        title: {
          text: ''
        }
      },
      legend: {
        enabled: false
      }, credits: {
        enabled: false
      },
      plotOptions: {
        pie: {
          shadow: false,
          center: ['50%', '50%'],
          colors: [
            '#adafad',
            '#20ba8d'
          ],
        }
      },
      series: [{
        name: "Tasks",
        data: [["Pending", 0], ["Completed", 1]],
        size: '90%',
        innerSize: '70%',
        showInLegend: true,
        dataLabels: {
          enabled: false
        }
      }]
    };
  }
}
