

# Mis notas sobre Next.js 13

~Los componentes de Next.js 13 dentro de la carpeta app, son por defecto siempre ejecutados  en el servidor.

~Sí necesitamos crear un componente que tenga interactividad, que necesite estado, que funcionen con un HOOK como UseState, UseEfect, UseReducer o sí se necesitamos acceder a la API del navegador; En la primera línea de codigo del archivo debemos poner el string 'use client', así indicamos que el componente necesita usar el lado del cliente (Hidratación).


## 'use client'

```javascript
'use client'
import { useState } from 'react'

export function LikeButton () {
  const [Liked, setLiked] = useState(false)
  return (
    <button onClick={() => setLiked(!Liked)}>
      {Liked ? '💚' : '🤍'}
    </button>
  )
}
```


## Documentation
[React-Wiki de Midudev](https://github.com/midudev/preguntas-entrevista-react)

[Video Next.js 13 de Midudev](https://youtu.be/tA-_vAz9y78)

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.jsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.