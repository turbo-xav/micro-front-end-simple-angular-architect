/*import('./bootstrap')
	.catch(err => console.error(err));*/
import { loadManifest } from '@angular-architects/module-federation';

loadManifest("/federation.manifest.json")
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
