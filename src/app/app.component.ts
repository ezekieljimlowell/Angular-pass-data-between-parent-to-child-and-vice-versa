import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*name = 100;
  receivename($event: number) {
    this.name = $event;
  }*/

  name = "";
  @ViewChild(ChildComponent) child: any;
  ngAfterViewInit() {
    this.name = this.child.name;
  }

  title = 'my-app';
  currentitem = ["chennai", "kovai"];
  obj = {name:"viswanath", famous: "biriyani"}
}
