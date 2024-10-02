import s from './style/OrderedItem.module.css'

function OrderedItem({ item }) {
  return (
    <div className={s.item}>
      <img
        src={item.thumbnail}
        className={s.thb}
        aria-hidden="true"
      />
      <div className={s.info}>
        <p className={s.name}>{item.name}</p>
        <div className={s.o_info}>
          <span className={s.quantity}>
            <span aria-hidden="true">{item.quantity}x</span>
          </span>
          <span className="sr-only">
            {item.quantity} {item.name} at ${item.price}{' '}
            each,
          </span>
          <span
            className={s.b_price}
            aria-hidden="true"
          >
            @ ${item.price.toFixed(2)}
          </span>
        </div>
      </div>
      <p className={s.total}>
        <span className="sr-only">
          total, ${(item.price * item.quantity).toFixed(2)}.
        </span>
        <span aria-hidden="true">
          ${(item.price * item.quantity).toFixed(2)}
        </span>
      </p>
    </div>
  )
}

export default OrderedItem
