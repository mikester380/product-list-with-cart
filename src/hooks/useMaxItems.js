import { useEffect } from 'react'

const getRect = (elem) => elem.getBoundingClientRect()

function useMaxItems(ref, max) {
  useEffect(() => {
    const wrapper = ref.current
    const items = [...wrapper.children]
    const numOfItems = items.length

    function work() {
      const shouldProceed = numOfItems > max
      if (!shouldProceed) return

      const targets = items.slice(0, max)
      let height

      if (max === 1) {
        height = getRect(targets[0]).height
      }

      if (max > 1) {
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

    work()
    window.addEventListener('resize', work)

    return () => {
      window.removeEventListener('resize', work)
    }
  }, [])
}

export default useMaxItems
