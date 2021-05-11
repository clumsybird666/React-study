import { PureComponent } from 'react'

export function connect(mapStateToProps,mapDispachToProp){
  return function enhanceHOC(WrappedComponent){
    return class extends PureComponent{
      render(h) {
        return <WrappedComponent />
      }
    }
  }
}