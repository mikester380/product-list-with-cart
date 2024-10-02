import s from './style/Quantity.module.css'

function Quantity({
  quantityInCart,
  putThisInCartAgain,
  takeOutOneOfThese,
  item,
  className = '',
}) {
  return (
    <div className={`${s.quantity} ${className}`.trim()}>
      <button
        className={s.button}
        onClick={takeOutOneOfThese}
        autoFocus={true}
      >
        <img
          src="/assets/images/icon-decrement-quantity.svg"
          aria-hidden="true"
        />
        <span className="sr-only">
          remove one {item} from cart
        </span>
      </button>
      <span className={s.value}>{quantityInCart}</span>
      <button
        className={s.button}
        onClick={putThisInCartAgain}
      >
        <img
          src="/assets/images/icon-increment-quantity.svg"
          aria-hidden="true"
        />
        <span className="sr-only">
          add another {item} to cart
        </span>
      </button>
    </div>
  )
}

export default Quantity
