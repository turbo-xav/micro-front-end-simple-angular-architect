import { Component } from '@angular/core';
import {OtherComponent} from './other/other.component';

@Component({
  selector: 'app-root',
  imports: [OtherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'remote-app';
}
