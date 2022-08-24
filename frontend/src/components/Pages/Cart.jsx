import React from 'react'
import { useReducer } from 'react'
import ProductItem from '../Shopping/ProductItem'
import { shoppingInitialState, shoppingReducer } from '../Shopping/ShoppingReducer'
import CartItem from '../Shopping/CartItem'
import { TYPES } from '../Shopping/ShoppingAction'
import ShoppingCart from '../Shopping/ShoppingCart'
import '../../styles/Cart.css'

const Cart = () => {

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)

  const { products, cart } = state;

  const delFromCart = (id, all = false) => {
    // console.log(id,all);
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id })
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id })
    }
  }

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART })
  }
  return (
    <div className='container-cart'>
      <h3>Mis Productos</h3>
      <div>
        <button onClick={clearCart}>Limpiar Carrrito</button>
        {
          cart.map((item, index) => (
            <CartItem key={index} data={item} delFromCart={delFromCart} />))
        }
      </div>
    </div>
  )
}

export default Cart