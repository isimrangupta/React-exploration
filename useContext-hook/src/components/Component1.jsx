import { useContext } from 'react'
import { counterContext } from './Context/context'

const Component1 = () => {
  const value = useContext(counterContext)
  return (
    <div>
     I am component1 {value.count}
    </div>
  )
}

export default Component1
