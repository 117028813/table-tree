import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TreeComponent } from './tree/tree.component';
import { TableComponent } from './table/table.component';
import { TreeModule } from 'ng2-tree';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    TreeModule,
    AgGridModule.withComponents([])
  ],
  declarations: [HomeComponent, TreeComponent, TableComponent]
})
export class HomeModule { }
