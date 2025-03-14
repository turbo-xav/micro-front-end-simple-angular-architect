import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { DynamicIoDirective, DynamicComponent} from 'ng-dynamic-component';
import {loadRemoteModule} from "@angular-architects/module-federation";


@Component({
  selector: 'app-root',
    imports: [RouterOutlet, RouterLink, DynamicIoDirective, DynamicComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'host-app';
  currentComponent: any = null;

  async ngOnInit(): Promise<void> {
    const module = await  loadRemoteModule('mfe1', './Other');
    // Instancie dynamiquement le composant dans le conteneur
    this.currentComponent = module.OtherComponent;

  }


}
