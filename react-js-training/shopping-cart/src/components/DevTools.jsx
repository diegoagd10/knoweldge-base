import './Footer.css'
import { useContext } from 'react'
import { FiltersContext } from '../context/filters'
import { CartContext } from '../context/cart'

export function DevTools () {
  const { filters } = useContext(FiltersContext)
  const { cart } = useContext(CartContext)

  return (
    <footer className='dev-tools'>
      {
        JSON.stringify({ ...filters, cart })
      }
    </footer>
  )
}
