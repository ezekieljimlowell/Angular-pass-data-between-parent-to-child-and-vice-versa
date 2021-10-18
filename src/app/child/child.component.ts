import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  name: string = "Chennai";
  @Output() nameEmitter = new EventEmitter < string > ();
  PostData() {
    this.nameEmitter.emit(this.name)
  }

  constructor() { }
  
  @Input() currentitem!: any[];
  @Input() obj!: {name: string, famous: string};
  
  /*ngOnInit(): void {

  }*/


}

