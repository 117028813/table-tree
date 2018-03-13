import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TreeComponent } from './tree/tree.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, TreeComponent, TableComponent]
})
export class HomeModule { }
