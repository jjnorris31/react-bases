export type CounterAction =
  | { type: 'increaseBy', payload: { value: number } }
  | { type: 'reset' };

export const reset = (): CounterAction => {
  return {
    type: 'reset'
  }
}

export const increaseBy = (value: number): CounterAction => {
  return {
    type: 'increaseBy',
    payload: {value}
  }
}
