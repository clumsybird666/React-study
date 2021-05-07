import React, { Component } from 'react'
const Info = React.createContext({
  info: 'swj'
})
class ChildCpn2 extends Component{
  render(h) {
    console.log(this.context);
    return <div>aa</div>
  }
}
ChildCpn2.contextType = Info
class ChildCpn extends Component{
  render(h) {
    return <div><ChildCpn2 /></div>
  }
}

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      // info: 'sww'
    }
  }
  render() {
    return (
      <div>
        <Info.Provider>
          <ChildCpn />
        </Info.Provider>
      </div>
    )
  }
}
