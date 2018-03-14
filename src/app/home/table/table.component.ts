import { Component, OnInit } from '@angular/core';
import { GridDataService } from '../../services/grid-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  columnDefs = this.gridDataService.gridData.columnDefs
  rowData = this.gridDataService.gridData.rowData
  gridApi
  addColumnButtonDisabled = false

  constructor(private gridDataService: GridDataService) { }

  ngOnInit() {
    
  }

  onGridReady(event) {
    this.gridApi = event.api
  }

  addRow() {
    this.rowData = this.gridDataService.addRow().rowData
    // this.rowData[0].a = 'aaa'
    // this.gridApi.refreshCells()
    this.gridApi.setRowData(this.rowData)
  }

  addColumn() {
    this.columnDefs = this.gridDataService.addColumn().columnDefs
    if (this.columnDefs.length >= 26) {
      this.addColumnButtonDisabled = true
    }
    this.gridApi.setColumnDefs(this.columnDefs)
    this.gridApi.setRowData(this.rowData)
  }

}
