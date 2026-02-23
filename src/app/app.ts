import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list-component/list-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('data-app');
  count: number = 0;
  hide: boolean = false;
  OnClickButton() {
    this.count++;
  } 
  onImageDoubleClick(){
    if(this.hide == false) {
      this.hide = true;
    }
    else{
      this.hide = false;
    }
  }
  
}
