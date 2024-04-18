import { Component } from '@angular/core';
import { AddComponent } from '../add/add.component';
import { ListComponent } from '../list/list.component';
import { CommonModule } from '@angular/common';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [AddComponent, ListComponent, CommonModule],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.css'

})

export class WrapperComponent {
  list: Array<string> = [];
  complete: Array<boolean> = [];

  addtolist(item: string) {

    // alert("from parent"+item);
    this.list.push(item);
    this.complete.push(false);
    // alert(this.list)x;

  }
  delete(id: number) {
    this.list = this.list.filter(function (ele, idofele) {
      return idofele != id;
    })
    this.complete = this.complete.filter(function (ele, idofele) {
      return idofele != id;
    })
  }
  done(id:number)
  {
    this.complete[id]= true;
  }
}
