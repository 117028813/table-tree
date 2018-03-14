import { Component, OnInit } from '@angular/core';
import { TreeModel, NodeMenuItemAction } from "ng2-tree";

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  tree: TreeModel = {
    settings: {
      menuItems: [
        { action: NodeMenuItemAction.NewFolder, name: '添加文件夹', cssClass: '' },
        { action: NodeMenuItemAction.NewTag, name: '添加文件', cssClass: '' },
        { action: NodeMenuItemAction.Remove, name: '删除文件', cssClass: '' },
        { action: NodeMenuItemAction.Rename, name: '修改名称', cssClass: '' },
      ]
    },
    value: 'Programming languages by programming paradigm',
    children: [
      {
        value: 'Object-oriented programming',
        children: [
          { value: 'Java' },
          { value: 'C++' },
          { value: 'C#' }
        ]
      },
      {
        value: 'Prototype-based programming',
        children: [
          { value: 'JavaScript' },
          { value: 'CoffeeScript' },
          { value: 'Lua' }
        ]
      },
      {
        value: 'foo',
        children: [
          { value: '1' },
          {
            value: '2',
            children: [
              {value: 'vue'},
              {value: 'react'},
              {value: 'angular'}
            ]
          }
        ]
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
