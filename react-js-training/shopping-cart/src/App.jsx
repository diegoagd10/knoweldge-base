import { useProducts } from './hooks/useProducts'
import { useFilters } from './hooks/useFilters'
import { Header } from './components/Header'
import { Cart } from './components/Cart'
import { Products } from './components/Products'
import { Footer } from './components/Footer'
import { DevTools } from './components/DevTools'
import { IS_DEVELOPMENT } from './config'
import { CartProvider } from './context/cart'

export function App () {
  const { products } = useProducts()
  const { filteredProducts } = useFilters({ products })

  return (
    <>
      <Header />
      <CartProvider>
        <Cart />
        <Products products={filteredProducts} />
        {IS_DEVELOPMENT && <DevTools />}
      </CartProvider>
      <Footer />
    </>
  )
}
