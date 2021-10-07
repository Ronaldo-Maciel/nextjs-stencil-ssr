#  NextJs server side render webcomponents from stencilJs

### How does it work server side render webcomponents inside NextJs Framework?

Stencil JS makes available a hydrate library. This library make prerendering stencil webcomponents in NodeJS server.
The "_document.tsx" inside pages folder of NextJs is processed in server, then make require hydrate app to be used in this file.

Know more about Hydrate app here: [hydrate-app](https://stenciljs.com/docs/hydrate-app).

### Get Starded

```bash
 yarn
 yarn client
 yarn server 
```

Open: [http://localhost:3000](http://localhost:3000)

### Validate server side render

Open your terminal. Copy HTML output and realize that the shadow DOM content is present.
The same result can be observed when open the page source in your browser.
