import React, { Component } from 'react'
import TabControl from './TabControl'


export default class App extends Component {
  render() {
    return (
      <div>
        <TabControl menus={['推荐','精选','热点']}/>
      </div>
    )
  }
}
