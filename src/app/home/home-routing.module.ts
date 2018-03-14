import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeComponent } from './tree/tree.component';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home.component';
import { LoginGuardService } from '../services/login-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [LoginGuardService],
    children: [
      {
        path: 'tree',
        component: TreeComponent
      },
      {
        path: 'table',
        component: TableComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
