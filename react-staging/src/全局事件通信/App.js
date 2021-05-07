import React, { PureComponent } from 'react'
import { EventEmitter } from 'events'

const eventBus = new EventEmitter()

export class Home extends PureComponent {
  render(h) {
   return <div>home</div>
  }
  componentDidMount(){
    eventBus.addListener('emitEvent',this.test)
  }
  componentWillUnmount(){
    eventBus.removeListener('emitEvent',this.test)
  }
  test(args){
    console.log(args);
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home></Home>
        <button onClick={e=>this.test()}>按钮</button>
      </div>
    )
  }
  test(){
    eventBus.emit('emitEvent',111)
  }
}
