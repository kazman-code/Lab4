import { Component } from '@angular/core';//imports angular


@Component({
  selector: 'app-root',//connects to html
  imports: [],
  templateUrl: './list-component.html',//html
  styleUrl: './list-component.css',/css
})
export class ListComponent {
  //array of presidents
  presidents: string[] = ["Higgins", "McAleese", "Robinson", "Hillery"];

  //array of objects holding the name of presidents and the term
  mypresidents: any[] =
[{name: "Higgins", term:"2011-2025"},
{name: "McAleese", term:"1997-2011"},
{name: "Robinson", term:"1990-1997"},
{name: "Hillery", term:"1976-1990"},
{name: "O Dalaigh", term:"1974-1976"}];

}
