import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './list-component.html',
  styleUrl: './list-component.css',
})
export class ListComponent {
  presidents: string[] = ["Higgins", "McAleese", "Robinson", "Hillery"];

  mypresidents: any[] =
[{name: "Higgins", term:"2011-2025"},
{name: "McAleese", term:"1997-2011"},
{name: "Robinson", term:"1990-1997"},
{name: "Hillery", term:"1976-1990"},
{name: "O Dalaigh", term:"1974-1976"}];

}
