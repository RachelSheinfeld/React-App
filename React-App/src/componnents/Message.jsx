import React from 'react'
import useSetStateWithLogging from '../Hooks/useSetStateWithLogging'

const Message = () => {
  const [state, setstate] = useSetStateWithLogging("")

  return (
    <>
      <h1>ENTER</h1>
      <input
        value={state}
        onChange={(e) => setstate(e.target.value)}
        placeholder="Enter messenger"
      />
      <h3>{state}</h3>
    </>
  )
}

export default Message