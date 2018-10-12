import React from 'react'

export default function inject(Component) {
  return class Injector extends React.Component {
    render() {
      const { title } = this.props
      return (
        <Component
          {...this.state}
          {...this.props}
          {...this.children}
          title={title}
        />
      )
    }
  }
}
