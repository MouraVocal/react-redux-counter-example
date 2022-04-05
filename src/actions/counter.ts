export const INCREMENT = 'COUNTER::INCREMENT'
export const DECREMENT = 'COUNTER::DECREMENT'
 
export const CounterIncrement = () => ({
  type: INCREMENT
})

export const CounterDecrement = () => ({
  type: DECREMENT
})
