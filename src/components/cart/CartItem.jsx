import s from './style/CartItem.module.css'

function CartItem({
  name,
  quantity,
  basePrice,
  takeOutOfCart,
}) {
  return (
    <div className={s.item}>
      <div className={s.ls}>
        <span className={s.name}>{name}</span>
        <div className={s.info}>
          <span className={s.quantity}>{quantity}x</span>
          <div className={s.price}>
            <span className={s.basePrice}>
              @ ${basePrice.toFixed(2)}
            </span>
            <span className={s.totalPrice}>
              ${(quantity * basePrice).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <div className={s.rs}>
        <button
          className={s.button}
          onClick={() => takeOutOfCart(name)}
        >
          <img
            src="/assets/images/icon-remove-item.svg"
            aria-hidden="true"
          />
          <span className="sr-only">
            remove {name} from cart
          </span>
        </button>
      </div>
    </div>
  )
}

export default CartItem
