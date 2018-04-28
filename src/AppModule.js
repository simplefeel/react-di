import React, { Component } from 'react'
import { register } from './di'
import Title from './Title'

register('title', 'hello React')

export default class App extends Component {
  render() {
    return <Header />
  }
}

function Header(props) {
  return (
    <header>
      <Title />
    </header>
  )
}
