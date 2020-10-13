import { Component, OnInit } from '@angular/core';
import { ExportExcelService } from '../../_services/export-excel.service';
import { ExcelSampleData } from './../../_data/excel-sample.data';
import { EmpPerformanceModel } from './../../_models/emp-performance.model';

export class ExcelSheetJsComponent implements OnInit {
  @Component({
    selector: 'app-excel-sheet-js',
    templateUrl: './excel-sheet-js.component.html',
    styleUrls: ['./excel-sheet-js.component.scss']
  })
  title = 'angular-export-to-excel';

  getData: ExcelSampleData['empPerformanceData'];
  dataForExcel = [];

  constructor(public ete: ExportExcelService) {}

  ngOnInit() {}

  exportToExcel() {
    this.getData.forEach((row: any) => {
      this.dataForExcel.push(Object.values(row));
    });

    const reportData = {
      title: 'Employee Sales Report - Jan 2020',
      data: this.dataForExcel,
      headers: Object.keys(this.getData[0])
    };

    this.ete.exportExcel(reportData);
  }
}
