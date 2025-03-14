const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe1',

  filename: 'remoteEntry.js',

  exposes: {
    './Component': './projects/remote-app/src/app/app.component.ts',
    './Other': './projects/remote-app/src/app/other/other.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
