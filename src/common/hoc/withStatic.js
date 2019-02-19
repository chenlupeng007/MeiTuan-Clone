import React from 'react'
import { StaticContext } from '@common/context'

const withStatic = (DecoratedComponent) => {
  const NewComponent = (props) => (
    <StaticContext.Consumer>
      {value => <DecoratedComponent staticContext={value} { ...props } />}
    </StaticContext.Consumer>
  )

  NewComponent.loadData = DecoratedComponent.loadData

  return NewComponent
}

export default withStatic;