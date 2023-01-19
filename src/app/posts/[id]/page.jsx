export default function Post ({ params }) {
  const { id } = params
  return (
    <h1>Esto es un Post de {id}</h1>
  )
}
