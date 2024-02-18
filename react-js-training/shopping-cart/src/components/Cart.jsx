import './Cart.css'
import { useId } from 'react'
import { useCart } from '../hooks/useCart'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons'

function CartItem ({ image, price, name, quantity, addToCart }) {
  return (
    <li>
      <img
        src={image}
        alt={name}
      />
      <div>
        <strong>{name}</strong> - ${price}
      </div>

      <footer>
        <small>Quantity: {quantity}</small>
        <button onClick={addToCart}>
          +
        </button>
      </footer>
    </li>
  )
}

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, addToCart, clearCart } = useCart()

  const handleClearCartClick = () => clearCart()

  return (
    <>
      <label
        className='cart-button'
        htmlFor={cartCheckboxId}
      >
        <CartIcon />
      </label>
      <input
        id={cartCheckboxId}
        type='checkbox'
        hidden
      />
      <aside className='cart'>
        <ul style={{ overflow: 'auto' }}>
          {
            cart.map((product) =>
              <CartItem
                key={product.id}
                image={product.image}
                price={product.price}
                name={product.name}
                quantity={product.quantity}
                addToCart={() => addToCart(product)}
              />
            )
          }
        </ul>

        <button onClick={handleClearCartClick}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
