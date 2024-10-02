import items from '../../../data.json'
import s from './style/Menu.module.css'

import MenuItem from './MenuItem'

function Menu() {
  return (
    <div className={s.menu}>
      <h1 className={s.title}>Desserts</h1>
      <div className={s.items}>
        {items.map((item, idx) => (
          <MenuItem
            key={idx}
            item={item}
          />
        ))}
      </div>
    </div>
  )
}

export default Menu
