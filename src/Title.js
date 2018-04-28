import { wire } from './di'
import React from 'react'
const Title = function(props) {
  return <h1>{props.title}</h1>
}

export default wire(Title, ['title'], title => ({ title }))
