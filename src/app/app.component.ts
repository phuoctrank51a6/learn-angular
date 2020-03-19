import { Component } from '@angular/core';
import { Product } from './Product';
import { data } from './MockProduct';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}
