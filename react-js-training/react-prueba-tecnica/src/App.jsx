import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

export default function App () {
  const { fact, refreshRandomCatFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  return (
    <main>
      <h1>Meme de un Gato</h1>
      <button onClick={refreshRandomCatFact}>Obtener nuevo hecho</button>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Imagen extraida de la primera palabra del siguiente hecho: ${fact}`}
        />
      )}
    </main>
  )
}
