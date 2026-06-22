import { useEffect } from 'react'

/**
 * Calls `onOutsideClick` when a pointer event happens outside the
 * element referenced by `ref`. Used by the navbar dropdowns.
 *
 * @param {import('react').RefObject<HTMLElement>} ref
 * @param {() => void} onOutsideClick
 * @param {boolean} enabled - Only attaches the listener while true.
 */
export function useClickOutside(ref, onOutsideClick, enabled = true) {
  useEffect(() => {
    if (!enabled) return

    function handlePointerDown(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onOutsideClick()
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    return () => document.removeEventListener('mousedown', handlePointerDown)
  }, [ref, onOutsideClick, enabled])
}
