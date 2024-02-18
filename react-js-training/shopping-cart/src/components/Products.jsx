import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart'

export function Products ({ products }) {
  const { cart, addToCart, removeFromCart } = useCart()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <div>
              <strong>{product.name}</strong> - ${product.price}
            </div>
            <div>
              <button
                style={{
                  background:
                    checkProductInCart(product)
                      ? 'red'
                      : '#09f'
                }}
                onClick={
                  () => checkProductInCart(product)
                    ? removeFromCart(product)
                    : addToCart(product)
                }
              >
                {
                  checkProductInCart(product)
                    ? <RemoveFromCartIcon />
                    : <AddToCartIcon />
                }
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
