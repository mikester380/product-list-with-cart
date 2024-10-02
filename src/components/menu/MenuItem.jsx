import { useCart } from '../../contexts/cart'
import s from './style/MenuItem.module.css'

import AddToCart from './AddToCart'
import Quantity from './Quantity'

function Item({ item }) {
  const { items, setItems } = useCart()

  const refInCart = items.find((el) => el.name === item.name)

  const isInCart = !!refInCart
  const quantityInCart = refInCart?.quantity || 0

  function putThisInCart() {
    const {
      image: { thumbnail },
      name,
      price,
    } = item

    items.push({
      name,
      price,
      quantity: 1,
      thumbnail,
    })

    setItems([...items])
  }

  function putThisInCartAgain() {
    refInCart.quantity++
    setItems([...items])
  }

  function takeOutOneOfThese() {
    refInCart.quantity--

    if (refInCart.quantity === 0) {
      const refIndex = items.indexOf(refInCart)
      items.splice(refIndex, 1)
    }

    setItems([...items])
  }

  return (
    <div className={s.item}>
      <picture className={`${s.pic} ${isInCart ? s.selected_item : ''}`.trim()}>
        <source
          srcSet={item.image.mobile}
          media="(width < 768px)"
        />
        <source
          srcSet={item.image.tablet}
          media="(min-width: 768px) and (max-width: 1023px)"
        />
        <source
          srcSet={item.image.desktop}
          media="(min-width: 1024px)"
        />
        <img
          src={item.image.desktop}
          alt={item.name}
        />
      </picture>
      {!isInCart ? (
        <AddToCart
          className={s.action}
          putThisInCart={putThisInCart}
          item={item.name}
        />
      ) : (
        <Quantity
          className={s.action}
          quantityInCart={quantityInCart}
          putThisInCartAgain={putThisInCartAgain}
          takeOutOneOfThese={takeOutOneOfThese}
          item={item.name}
        />
      )}
      <div className={s.details}>
        <p className={s.category}>{item.category}</p>
        <p className={s.name}>{item.name}</p>
        <p className={s.price}>${item.price.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default Item
