import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
} from '@radix-ui/react-dialog'
import { useCart } from '../../contexts/cart'
import s from './style/ConfirmedModal.module.css'

import OrderedItems from './OrderedItems'
import Button from '../button'

function ConfirmedModal({ opened, openButton, hideModal }) {
  const { items, setItems, totalPrice } = useCart()

  function startNewOrder() {
    // clear the cart
    setItems([])

    // hide the modal
    hideModal()
  }

  return (
    <Root
      // adding an 'open' state gives us more control over when the modal is triggered.
      // without this, the modal is immediately opened when the trigger button is clicked
      // and we don't want that since we'll need to actually confirm the order on the
      // backend before showing the success modal to the user.

      // with this applied, the modal becomes controlled by us meaning we decide when it
      // is opened or closed based on if the 'open' state is true or false.
      open={opened}
      //
      // the line below makes it so that when we click outside the modal (overlay), the modal closes.
      // clicking outside the modal would normally instantly close the modal but since our modal is
      // now controlled by us, it is only closed when our 'open' state is false.

      // clicking outside the modal only closes the modal when 'open' is undefined but since
      // we're explicitly setting the 'open' state, it overrides/blocks the modal from closing
      // unless 'open' is set to false.

      // onOpenChange tracks when we try to change the modal's 'open' state by interacting with the
      // modal. this includes clicking the overlay, pressing the esc key etc. it calls the callback
      // function passed to it with the state we're changing to.

      // NOTE: the callback is only called for interactions. it's not called when we change the controlled
      // "open" state.
      onOpenChange={(opened) => {
        !opened && hideModal()
      }}
    >
      <Trigger asChild={true}>{openButton}</Trigger>
      <Portal container={document.querySelector('.modal')}>
        <Overlay className={s.overlay} />
        <Content className={s.content}>
          <img
            src="/assets/images/icon-order-confirmed.svg"
            className={s.icon}
            aria-hidden="true"
          />
          <Title className={s.title}>Order Confirmed</Title>
          <Description className={s.description}>
            We hope you enjoy your food!
          </Description>
          <div className={s.details}>
            <OrderedItems items={items} />
            <div className={s.total_wrapper}>
              <p className={s.total_title}>Order Total</p>
              <p className={s.total}>
                ${totalPrice.toFixed(2)}
              </p>
            </div>
          </div>
          <Button onClick={startNewOrder}>
            Start New Order
          </Button>
        </Content>
      </Portal>
    </Root>
  )
}

export default ConfirmedModal
