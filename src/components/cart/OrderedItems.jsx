import { useRef } from 'react'
import useMaxItems from '../../hooks/useMaxItems'
import OrderedItem from './OrderedItem'

import s from './style/ConfirmedModal.module.css'

function OrderedItems({ items }) {
  const ref = useRef()
  useMaxItems(ref, 3)

  return (
    <div
      ref={ref}
      className={s.items}
    >
      {items.map((item, idx) => (
        <OrderedItem
          item={item}
          key={idx}
        />
      ))}
    </div>
  )
}

export default OrderedItems
