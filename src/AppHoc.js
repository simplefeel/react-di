import React from 'react'

function Title(props) {
  return <h1>{props.title}</h1>
}

function inject(Component) {
  return class Injector extends React.Component {
    render() {
      const title = 'hello world'
      return <Component {...this.props} title={title} />
    }
  }
}

const EnhancedTitle = inject(Title)

export default function Header() {
  return (
    <header>
      <EnhancedTitle />
    </header>
  )
}
