import { useEffect } from 'react'

const getRect = (elem) => elem.getBoundingClientRect()

export default function (ref, max) {
  useEffect(() => {
    const wrapper = ref.current
    const items = [...wrapper.children]
    const itemsCount = items.length

    function letsGo() {
      // we proceed if the total number of items > the number of items we want to show otherwise, there's no need.
      const shouldProceed = itemsCount > max

      if (shouldProceed) {
        const targets = items.slice(0, max)
        let height

        // if we only want to show 1 item
        if (targets.length < 2) {
          height = getRect(targets[0]).height
        }

        // if we want to show more than 1 item
        if (targets.length > 1) {
          const bottomOfItem1 = getRect(targets[0]).bottom
          const topOfItem2 = getRect(targets[1]).top
          const gapBetweenItems = topOfItem2 - bottomOfItem1

          height = targets.reduce(
            (sum, item) => sum + getRect(item).height,
            (max - 1) * gapBetweenItems
          )
        }

        wrapper.setAttribute('data-maxItems', '')
        wrapper.style.height = height + 'px'
      }
    }

    letsGo()

    window.addEventListener('resize', letsGo)
    return () => window.removeEventListener('resize', letsGo)
  }, [])
}
