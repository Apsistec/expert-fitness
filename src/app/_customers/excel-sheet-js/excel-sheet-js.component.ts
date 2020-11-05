import { Component, OnInit } from '@angular/core';
import { ExportExcelService } from '../../_services/export-excel.service';
import { ExcelSampleData } from './../../_data/excel-sample.data';

@Component({
  selector: 'app-excel-sheet-js',
  templateUrl: './excel-sheet-js.component.html',
  styleUrls: ['./excel-sheet-js.component.scss'],
})

export class ExcelSheetJsComponent implements OnInit {
  title = 'angular-export-to-excel';

  getData: ExcelSampleData['empPerformanceData'];
  dataForExcel = [];

//   downloadExcel() {
//       //create new excel work book
// let workbook = new Workbook();

// //add name to sheet
// let worksheet = workbook.addWorksheet("Employee Data");

// //add column name
// let header=["Name","Age"]
// let headerRow = worksheet.addRow(header);
// //headerRow.font = { size: 14, bold: true };

// for (let x1 of this.json_data)
// {
//   let x2=Object.keys(x1);
//   let temp=[]
//   for(let y of x2)
//   {
//     temp.push(x1[y])
//   }
//   worksheet.addRow(temp)
// }
// //set downloadable file name
// let fname="Emp Data Sep 2020"

// //add data and file name and download
// workbook.xlsx.writeBuffer().then((data) => {
//   let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
//   fs.saveAs(blob, fname+'-'+new Date().valueOf()+'.xlsx');
// });

// }


  constructor(public exportExcelService: ExportExcelService) {}

  ngOnInit(): void {}

  exportToExcel(): void {
    this.getData.forEach((row: any) => {
      this.dataForExcel.push(Object.values(row));
    });

    const reportData = {
      title: 'Employee Sales Report - Jan 2020',
      data: this.dataForExcel,
      headers: Object.keys(this.getData[0]),
    };

    this.exportExcelService.exportExcel(reportData);
  }
}
