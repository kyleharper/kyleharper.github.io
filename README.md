# kyleharper-github-io

Personal site for Kyle Harper. Product Engineer & Engineering Manager.

## Setup

```shellscript
npx create-remix@latest --template remix-run/remix/templates/spa
```

## Development

```shellscript
npm run dev
```

## Production

The build will generate assets and an `index.html` for the SPA.

```shellscript
npm run build
```

You can serve this from any server of your choosing, for a simple example, you could use [http-server](https://www.npmjs.com/package/http-server):

```shellscript
npx http-server build/client/
```
