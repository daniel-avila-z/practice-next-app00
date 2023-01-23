
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

export default async function Where ({ params }) {
  const { id } = params
  const post = await fetchSinglePost(id)
  return (
    <p>Home~Posts~{post.title}</p>
  )
}
