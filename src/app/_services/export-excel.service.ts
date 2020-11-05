import { Injectable } from '@angular/core';
import * as ExcelJs from 'exceljs';
import * as fs from 'file-saver';
import * as logo from '../../assets/data/mylogo.js';
import { MessageService } from './message.service.js';

@Injectable({
  providedIn: 'root',
})
export class ExportExcelService {
  constructor(private messageService: MessageService) {}

  exportExcel(excelData) {
    // Title, Header & Data
    const title = excelData.title;
    const header = excelData.headers;
    const data = excelData.data;

    // Create a workbook with a worksheet
    const workbook = new ExcelJs.Workbook();
    const worksheet = workbook.addWorksheet('Sales Data');

    // Add Row and formatting
    worksheet.mergeCells('C1', 'F4');
    const titleRow = worksheet.getCell('C1');
    titleRow.value = title;
    titleRow.font = {
      name: 'Calibri',
      size: 16,
      underline: 'single',
      bold: true,
      color: { argb: '0085A3' },
    };
    titleRow.alignment = { vertical: 'middle', horizontal: 'center' };

    // Date
    worksheet.mergeCells('G1:H4');
    const d = new Date();
    const date = d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear();
    const dateCell = worksheet.getCell('G1');
    dateCell.value = date;
    dateCell.font = {
      name: 'Calibri',
      size: 12,
      bold: true,
    };
    dateCell.alignment = { vertical: 'middle', horizontal: 'center' };

    // Add Image
    const myLogoImage = workbook.addImage({
      base64: logo.imgBase64,
      extension: 'png',
    });
    worksheet.mergeCells('A1:B4');
    worksheet.addImage(myLogoImage, 'A1:B4');

    // Blank Row
    worksheet.addRow([]);

    // Adding Header Row
    const headerRow = worksheet.addRow(header);
    headerRow.eachCell((cell, colNumber) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '4167B8' },
        bgColor: { argb: '' },
      };
      cell.font = {
        bold: true,
        color: { argb: 'FFFFFF' },
        size: 12,
      };
    });

    // Adding Data with Conditional Formatting
    // tslint:disable-next-line: no-shadowed-variable
    data.forEach((d: any) => {
      const row = worksheet.addRow(d);

      const sales = row.getCell(6);
      let color = '262626';
      if (+sales.value < 200000) {
        color = 'FF9999';
      }

      sales.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: color },
      };
    });

    worksheet.getColumn(3).width = 20;
    worksheet.addRow([]);

    // Footer Row
    const footerRow = worksheet.addRow([
      'Employee Sales Report Generated from expertfitness.com at ' + date,
    ]);
    footerRow.getCell(1).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFB050' },
    };

    // Merge Cells
    worksheet.mergeCells(`A${footerRow.number}:F${footerRow.number}`);

    // Generate & Save Excel File
    // tslint:disable-next-line: no-shadowed-variable
    workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], {
        type:
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      fs.saveAs(blob, title + '.xlsx');
    }).catch((err) => this.messageService.errorAlert(JSON.stringify(err)));
  }
}
