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
