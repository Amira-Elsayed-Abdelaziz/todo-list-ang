import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() itemtolist: any;
  @Input() id: any;
  @Output() sendidtoparent = new EventEmitter();
  @Output() sendidtoparentcomp = new EventEmitter();
  sendidfromchild(id: number) {
    this.sendidtoparent.emit(id);
  }
  sendidfromchildcomp(id: number) {
    this.sendidtoparentcomp.emit(id);
  }
  strick(id: string) {
    let label: any = document.getElementById(id);
    console.log(label.classList[0]);

    if (!label.classList[0]) {
      label.setAttribute("class", "text-decoration-line-through");
      console.log(label);
    }
    else {
      label.classList.remove('text-decoration-line-through');
    }
  }



}
