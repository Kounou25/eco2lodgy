
import { useScrollToTop } from '@/hooks/useScrollToTop'

export function ScrollToTopProvider({ children }) {
  useScrollToTop()
  return children
}
