import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
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
