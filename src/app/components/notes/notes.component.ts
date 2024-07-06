import { Component,SimpleChanges, ViewChild } from '@angular/core';
import { GridsterConfig, GridsterItem, GridsterItemComponent, GridsterItemComponentInterface } from 'angular-gridster2';



@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {
  
  @ViewChild('gridsterItem') gridItem!: GridsterItemComponent;
  
  public options: GridsterConfig;
  public unitHeight: number;
  public item1: GridsterItem;
  public item2: GridsterItem;
  
  
  constructor() {
    this.unitHeight = 0;
    this.item1 = { x: 3, y: 0, rows: 3, cols: 4 };
    this.item2 = { x: 7, y: 0, rows: 3, cols: 4 };
   
    this.options = {
      itemResizeCallback: this.itemResize.bind(this),
      pushItems: true,
      minCols: 12,
      maxCols: 12,
      minRows: 5,
      fixedRowHeight: 120,
      gridType: 'scrollVertical',
      resizable: {
        enabled: true
      },
      draggable: {
        enabled: true
      }
    };
  }
  public itemResize(item: GridsterItem, itemComponent: GridsterItemComponentInterface): void {
    console.log('update', item);

    if (itemComponent.gridster.curRowHeight > 1) {
      
      this.unitHeight = itemComponent.gridster.curRowHeight;
      
    }
    
    itemComponent.gridster.curRowHeight += (item.cols * 100 - item.rows) / 10000;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    
  }
 


}
