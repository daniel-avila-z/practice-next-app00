import Link from 'next/link'

const fetchSinglePost = (id) => {
  // incremental static regeneration
  // Lo que hace es que cada X tiempo sí ha recibido una request, revalidaria y haria un nuevo FETCH para regenerar el archivo
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

export default async function Post ({ children, params }) {
  const { id } = params
  const post = await fetchSinglePost(id)
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
      {children}
    </article>
  )
}
