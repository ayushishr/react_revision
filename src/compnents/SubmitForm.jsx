import React from 'react'
import { useContext } from 'react'
import { channelContext } from '../App'


function SubmitForm() {
    const user = useContext(channelContext)
  return (
    <div>hey i am another{user}</div>
  )
}

export default SubmitForm