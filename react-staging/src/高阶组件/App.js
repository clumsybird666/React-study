import React, { PureComponent } from 'react'

class App extends PureComponent {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
function enhanceComponent(WrappedComponent){
  return class newComponent extends PureComponent{
    render(h) {
     return <WrappedComponent /> 
    }
  }
}

const EnhanceComponent = enhanceComponent(App)

export default EnhanceComponent
