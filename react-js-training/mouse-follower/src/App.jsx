import { useEffect, useState } from 'react'

function App () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // Se ejecuta cada vez que el componente se monta o la dependencias cambian
  useEffect(
    () => {
      const handleMove = (event) => {
        const { clientX, clientY } = event
        setPosition({ x: clientX, y: clientY })
      }
      if (enabled) {
        window.addEventListener('pointermove', handleMove)
      }

      // cleanup
      return () => {
        // Este metodo se ejecuta cada vez que el componente se desmonta
        // o cuando las dependecias cambian, antes de ejecutar el efecto
        // Entonces, este es un buen lugar para limpiar los efectos secundarios
        window.removeEventListener('pointermove', handleMove)
      }
    },
    // El useEffect se ejecutara cada vez que el valor de enabled cambie
    [enabled]
  )

  const enableBall = () => {
    setEnabled(!enabled)
    setPosition({ x: 0, y: 0 })
  }

  return (
    <main>
      <div
        style={{
          position: 'absolute',
          backgroundColor: '#09f',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
      <h3>Proyecto 3</h3>
      <button onClick={enableBall}>{enabled ? 'Desactivar' : 'Activar'}</button>
    </main>
  )
}

export default App
