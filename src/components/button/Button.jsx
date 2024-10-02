import { forwardRef } from 'react'
import s from './Button.module.css'

const Button = forwardRef(function (
  { children, className = '', ...otherProps },
  ref
) {
  return (
    <button
      className={`${s.button} ${className}`.trim()}
      ref={ref}
      {...otherProps}
    >
      {children}
    </button>
  )
})

export default Button
