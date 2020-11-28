import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuTitle: string = "Benjamin Pedron";
  dropDownLinkList = new Array();
  
  constructor() {
    this.dropDownLinkList.push(new DropDownLink("Memory", "/memory"))
  }

  ngOnInit(): void {
  }

}

class DropDownLink {
  private affichage: string;
  private routerLink: string;

  constructor(affichage: string, url: string) {
    this.affichage = affichage;
    this.routerLink = url;
  }
}
