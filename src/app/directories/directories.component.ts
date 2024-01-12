import {FlatTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

interface directoryNode {
  name: string;
  children?: directoryNode[];
}

const TREE_DATA: directoryNode[] = [
  {
    name: 'Favoris',
    children: [{name: 'Boîte de réception'}, {name: 'Elements envoyés'}, {name: 'Brouillons'}],
  },
  {
    name: 'Tous les éléments',
        children: [{name: 'Brouillons'}, {name: 'Elements envoyés'}, {name: 'Elements supprimés'}, {name: 'Courrier indésirable'}],
  }];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-directories',
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule],
  templateUrl: './directories.component.html',
  styleUrl: './directories.component.css'
})
export class DirectoriesComponent {

  private _transformer = (node: directoryNode, level:number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    }
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, 
    node => node.expandable
    )

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  )

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }
  
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

}
