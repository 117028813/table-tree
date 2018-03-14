import { Injectable } from '@angular/core';

@Injectable()
export class GridDataService {

  gridData = {
    columnDefs: [],
    rowData: []
  }

  constructor() {
    for (let i = 0; i < 3; i++) {
      this.gridData.columnDefs.push({
        headerName: String.fromCharCode(i + 65),
        field: String.fromCharCode(i + 97),
        pinned: 'left'
      })
    }

    for (let i = 0; i < 10; i++) {
      this.gridData.rowData[i] = {}
      for (let j = 0; j < this.gridData.columnDefs.length; j++) {
        this.gridData.rowData[i][this.gridData.columnDefs[j].field] = Math.random().toFixed(2)
      }
    }
  }

  addRow() {
    this.gridData.rowData.push({})
    this.gridData.columnDefs.forEach((val, ind, arr) => {
      this.gridData.rowData[this.gridData.rowData.length - 1][val.field] = Math.random().toFixed(2)
    })
    return this.gridData
  }

  addColumn() {
    this.gridData.columnDefs.push({
      headerName: String.fromCharCode(this.gridData.columnDefs.length + 65),
      field: String.fromCharCode(this.gridData.columnDefs.length + 97)
    })
    this.gridData.rowData.forEach((val, ind, arr) => {
      val[this.gridData.columnDefs[this.gridData.columnDefs.length - 1].field] = Math.random().toFixed(2)
    })
    return this.gridData
  }

}
