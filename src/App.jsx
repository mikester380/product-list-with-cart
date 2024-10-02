import s from './App.module.css'
import Menu from './components/menu'
import Cart from './components/cart'
import { CartProvider } from './contexts/cart'

function App() {
  return (
    <CartProvider>
      <div className={s.app}>
        <div className={s.left}>
          <Menu />
        </div>
        <div className={s.right}>
          <Cart />
        </div>
      </div>
    </CartProvider>
  )
}

export default App
