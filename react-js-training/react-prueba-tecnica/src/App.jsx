import { useEffect, useState } from 'react'

const RANDOME_CAT_FACT_API_URL = 'https://catfact.ninja/fact'
const CAT_IMAGE_URL = 'https://cataas.com/cat/says/'

export default function App () {
  const [fact, setFact] = useState(null)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    fetch(RANDOME_CAT_FACT_API_URL)
      .then((response) => response.json())
      .then(({ fact }) => setFact(fact))
  }, [])

  useEffect(() => {
    if (fact === null) return

    const message = fact.split(' ')[0]
    setMessage(message)
  }, [fact])

  return (
    <main>
      <h1>Meme de un Gato</h1>
      {fact && <p>{fact}</p>}
      {message && (
        <img
          src={`${CAT_IMAGE_URL}${message}`}
          alt={`Esta imagen representa una foto de un gato mostrando la primera palabra del siguiente hecho: ${fact}`}
        />
      )}
    </main>
  )
}
