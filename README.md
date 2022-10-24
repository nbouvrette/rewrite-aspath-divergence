## How to reproduce

```bash
npm install
npm run dev
```

Open [http://localhost:3000/my-directory](http://localhost:3000/my-directory) with your browser to see the result.

### Happy path

When on http://localhost:3000/my-directory, both SSR and client side `asPath` are identical and do not contain the `basePath`. This points on the `pages/my-directory.tsx` page.

### Issue with `asPath`

If you navigate to the URL using a rewrite [http://localhost:3000/mon-dossier](http://localhost:3000/mon-dossier), you will see an hydration error.

I originally mentioned this issue on https://github.com/vercel/next.js/issues/32772 but I think the discussion got confused by the dynamic route.

The issue here is also related to https://github.com/vercel/next.js/issues/41728.

I presume there is some logic missing on the server-side to handle `rewrites` the same way as on the client-side.
