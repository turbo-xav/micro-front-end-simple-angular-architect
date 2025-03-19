import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import {WebComponentWrapper, WebComponentWrapperOptions} from '@angular-architects/module-federation-tools';

export const routes: Routes = [
  {
    path: 'react',
    component: WebComponentWrapper,
    data: {
      type: 'script',
      remoteEntry: 'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
      remoteName: 'react',
      exposedModule: './web-components',
      elementName: 'react-element'
    } as WebComponentWrapperOptions
  },
  {
    path: 'remote-app',
    loadComponent: () =>
      loadRemoteModule('mfe1', './Component').then((m) => m.AppComponent),
      /*loadRemoteModule(
        {
          type: 'module',
          remoteEntry: 'http://localhost:4201/remoteEntry.js',
          exposedModule: './Component'
        }
      ).then((m) => m.AppComponent),*/
  },
  {
    path: 'other',
    loadComponent: () =>
      loadRemoteModule('mfe1', './Other').then((m) => m.OtherComponent),
  },

];
