import { createContext } from 'react'
import React, { Component } from 'react'

const Context = createContext({})

const Provider = Context.Provider
const Consumer = Context.Consumer

const context = { title: 'hello Dependency Injection' }

class App extends Component {
  render() {
    return (
      <Provider value={context}>
        <Header />
      </Provider>
    )
  }
}

function Header(props) {
  return (
    <header>
      <Title />
    </header>
  )
}

function Title() {
  return <Consumer>{({ title }) => <h1>{title}</h1>}</Consumer>
}

export default App
