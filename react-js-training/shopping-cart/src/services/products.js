import productResults from '../mocks/products.json'
import categoryResults from '../mocks/categories.json'

function mapProduct (product) {
  return {
    id: product.id,
    name: product.title,
    price: product.price,
    brand: product.brand,
    image: product.thumbnail,
    quantity: product.stock,
    rating: product.rating,
    category: product.category,
    priceWithDiscount: product.price - (product.price * product.discountPercentage),
    images: product.images
  }
}

export function fetchProducts () {
  const products = productResults.products
  return products.map(mapProduct)
}

export function fetchCategories () {
  return categoryResults
}
