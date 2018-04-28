import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { title: 'hello world' }
  }
  render() {
    const { title } = this.state
    return <Header title={title} />
  }
}

function Header(props) {
  return (
    <header>
      <Title {...props} />
    </header>
  )
}

function Title(props) {
  return <h1>{props.title}</h1>
}

export default App
