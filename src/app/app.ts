import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list-component/list-component';

@Component({
  selector: 'app-root',
  //imports
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //signal notifies angular when it changes
  protected readonly title = signal('data-app');
  //Declaration of Vaiables
  count: number = 0;//amount of times button  has been clicked
  hide: boolean = false;//used to show if image is hidden or shown
  //increments counter with each button click
  OnClickButton() {
    this.count++;
  } 
  //hides and shows the image when double clicked
  onImageDoubleClick(){
    if(this.hide == false) {
      this.hide = true;
    }
    else{
      this.hide = false;
    }
  }
  
}
