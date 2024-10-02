import s from './style/AddToCart.module.css'

function AddToCart({
  putThisInCart,
  item,
  className = '',
}) {
  return (
    <button
      className={(s.button + ' ' + className).trim()}
      onClick={putThisInCart}
    >
      <img
        src="/assets/images/icon-add-to-cart.svg"
        className={s.icon}
      />
      <span>
        Add <span className="sr-only">{item}</span> to Cart
      </span>
    </button>
  )
}

export default AddToCart
