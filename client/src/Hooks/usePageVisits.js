import { useEffect } from 'react'
import useLocalStorage from '../Hooks/useLocalStorage'

export default function usePageVisits(page) {

  const [visits, setVisits] = useLocalStorage('visits', {})

  useEffect(() => {
    
    visits[page]? visits[page] += 1 : visits[page] = 1
    setVisits({...visits, ...visits[page]})

  }, [page])

  return [visits, setVisits]

}