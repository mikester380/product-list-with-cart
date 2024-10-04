import { useState } from 'react'
import { useCart } from '../../contexts/cart'
import s from './style/Cart.module.css'

import CartItem from './CartItem'
import ConfirmedModal from './ConfirmedModal'
import Button from '../button'

function Cart() {
  const [confirmedOrder, setConfirmedOrder] = useState(false)
  const { items, setItems, totalItems, totalPrice } = useCart()
  const isEmpty = !items.length

  function takeOutOfCart(itemName) {
    const itemIndex = items.findIndex((item) => item.name === itemName)

    const newItems = [...items]

    newItems.splice(itemIndex, 1)
    setItems(newItems)
  }

  function confirmOrder() {
    // normally, this would be set after we successfully confirmed
    // the order on the backend but since this is a client only app...
    setConfirmedOrder(true)
  }

  return (
    <div className={s.cart}>
      <h2 className={s.title}>Your Cart ({totalItems})</h2>
      {!isEmpty ? (
        <>
          <div className={s.items}>
            {items.map((item) => (
              <CartItem
                key={item.name}
                name={item.name}
                quantity={item.quantity}
                basePrice={item.price}
                takeOutOfCart={takeOutOfCart}
              />
            ))}
          </div>
          <div className={s.total}>
            <p>Order Total</p>
            <p className={s.bill}>${totalPrice.toFixed(2)}</p>
          </div>
          <div className={s.neutral}>
            <img
              src="/assets/images/icon-carbon-neutral.svg"
              alt=""
            />
            <span>
              This is a <span className={s.bold}>carbon-neutral</span> delivery
            </span>
          </div>
          <ConfirmedModal
            opened={confirmedOrder}
            hideModal={() => setConfirmedOrder(false)}
            openButton={<Button onClick={confirmOrder}>Confirm Order</Button>}
          />
        </>
      ) : (
        <div className={s.empty}>
          <img
            src="/assets/images/illustration-empty-cart.svg"
            alt=""
          />
          <p>Your selected items will appear here</p>
        </div>
      )}
    </div>
  )
}

export default Cart
