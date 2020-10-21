// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import React from 'react'

// ** 1

// First argument in your reducer is called the "state", the second argument is called the "action"
// function countReducer(count, step) {
//   return count + step
// }

// ** 2

// Count reducer now takes the whole state and the updated version of that state object
// function countReducer(state, action) {
//   // Then we merge them together to get our new state values
//   return ({ ...state, ...action })
// }

// ** 3
function countReducer(state, action) {
  // We could have just returned action(state) however by using the typeof with the ternary we're able handle both a function and an object
  return ({ ...state, ...(typeof action === 'function' ? action(state) : action) })
}


function Counter({ initialCount = 0, step = 1 }) {
  // ** 1

  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  // const [count, changeCount] = React.useReducer(countReducer, initialCount)
  // changeCount is our "dispatch" function
  // const increment = () => changeCount(step)

  // ** 2

  // const [state, setState] = React.useReducer(countReducer, {
  //   count: initialCount,
  // })
  // const { count } = state
  // const increment = () => setState({ count: count + step })

  // ** 3

  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const { count } = state
  const increment = () =>
    setState(currentState => ({ count: currentState.count + step }))

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
