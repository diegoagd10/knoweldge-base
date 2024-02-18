export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

// Update localStorage with state for cart
const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
  const { type, payload } = action

  if (type === CART_ACTIONS.ADD_TO_CART) {
    const { id } = payload
    if (state.some(item => item.id === id)) {
      const newCart = state.map(item => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1
          }
        }

        return item
      })

      updateLocalStorage(newCart)
      return newCart
    }

    const { image, name, price } = payload
    const newProduct = {
      id,
      image,
      name,
      price,
      quantity: 1
    }
    const newCart = [...state, newProduct]
    updateLocalStorage(newCart)
    return newCart
  }

  if (type === CART_ACTIONS.REMOVE_FROM_CART) {
    const { id } = payload
    const newCart = state.filter(item => item.id !== id)
    updateLocalStorage(newCart)
    return newCart
  }

  if (type === CART_ACTIONS.CLEAR_CART) {
    const newCart = []
    updateLocalStorage(newCart)
    return newCart
  }

  return state
}
