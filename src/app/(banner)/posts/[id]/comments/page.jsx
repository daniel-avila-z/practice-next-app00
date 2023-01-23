// import Link from 'next/link'
// import Error from './error'

import Image from 'next/image'

const fetchComments = async (id) => {
  // await new Promise(resolve => setTimeout(resolve, 3000))

  // incremental static regeneration
  // Lo que hace es que cada X tiempo sí ha recibido una request, revalidaria y haria un nuevo FETCH para regenerar el archivo
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())

  // throw new Error(Error)
}

export default async function Post ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)
  return (
    <ul style={{ background: 'rgb(0 77 122)', fontSize: '18px' }}>
      {comments.map(comment => (
        <li key={comment.id}>
          <Image width='50' height='50' alt={comment.name} src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`} />
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>

  )
}
