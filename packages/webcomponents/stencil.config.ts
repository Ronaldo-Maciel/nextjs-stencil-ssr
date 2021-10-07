import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'webcomponents',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    { type: 'dist-hydrate-script' },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  devServer: {
    port: 3001
  }
};
