import { useEffect, useState } from 'react'
import { fetchRandomCatFact } from './services/facts'
import { useFetchCatMessage } from './hooks/useFetchCatMessage'

const CAT_IMAGE_URL = 'https://cataas.com/cat/says/'

export default function App () {
  const [fact, setFact] = useState(null)
  const { message } = useFetchCatMessage({ fact })

  useEffect(() => {
    fetchRandomCatFact().then(setFact)
  }, [])

  const getNewRandomCatFact = async () => {
    const newFact = await fetchRandomCatFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>Meme de un Gato</h1>
      <button onClick={getNewRandomCatFact}>Obtener nuevo hecho</button>
      {fact && <p>{fact}</p>}
      {message && (
        <img
          src={`${CAT_IMAGE_URL}${message}?fontSize=50&fontColor=white`}
          alt={`Esta imagen representa una foto de un gato mostrando la primera palabra del siguiente hecho: ${fact}`}
        />
      )}
    </main>
  )
}
