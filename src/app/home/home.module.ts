// buildin module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// custom module
import { HomeRoutingModule } from './home-routing.module';

// component
import { HomeComponent } from './home.component';
import { TreeComponent } from './tree/tree.component';
import { TableComponent } from './table/table.component';

// thrid party module
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
