import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
export default class TabControl extends Component {
  constructor(){
    super()
    this.state = {
      curIndex: 0
    }
  }
  render() {
    const { menus } = this.props
    return (
      <div className="tab-control">
        {
          menus.map((item,index)=>{
            return <div 
            className= {this.state.curIndex === index ? 'tab-item active' : ''}
            onClick={()=>this.tabClick(index)}
            key={index}>
              {item}
            </div>
          })
        }
      </div>
    )
  }
  tabClick(index){
    this.setState({
      curIndex:index
    })
  }
}
TabControl.propTypes = {
  menus: PropTypes.array.isRequired
}
