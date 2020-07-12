import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  //template: '<h1>Welcome Welcome {{name}}</h1>',
  //styles: ['h1, p {color:blue;}'],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'RGU Groups';
  imgLogo = 'assets/imgs/logo.jpg';

  @Input()
  public sidenavDrawer!: MatDrawer;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidenav(): void {
    this.sidenavDrawer.toggle();
  }

}
