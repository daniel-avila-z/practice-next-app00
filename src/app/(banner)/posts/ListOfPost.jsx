import { LikeButton } from './LikeButton.jsx'
import Link from 'next/link'

const fetchPosts = () => {
  console.log('FETCHING POSTS!!!!!')
  console.log('❤')
  // con cache: 'no-store' hacemos que el componente no sea estatico, y se ejecute en el servidor (SSR)
  return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
    .then(res => res.json())
}

export async function ListOfPosts () {
  const posts = await fetchPosts()

  return posts.slice(0, 5).map(post => (
    <article key={post.id}>
      <Link href='/posts/[id]' as={`/posts/${post.id}`}>

        <h2>{post.title}</h2>
        <p>{post.body}</p>

      </Link>
      <LikeButton id={post.id} />
    </article>
  ))
}
