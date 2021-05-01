import React, { Component } from 'react'
import PropTypes from 'prop-types'

function ChildCpn(props){
  const { name } = props
  return (
    <div>{name}</div>
  )
}
ChildCpn.propTypes = {
  // eslint-disable-next-line no-undef
  name: PropTypes.string
}
ChildCpn.defaultProps = {
  name: 'swj'
}
class Home extends Component {
  constructor(){
    super()
    this.state = {
      count: 0
    }
  }
  render(){
    return(
      <div>
        <ChildCpn />
      </div>
    )
  }
  add(){
    this.setState({
      count: this.state.count+1
    })
  }
  componentDidMount() {
    console.log('挂载');
  }
  componentDidUpdate() {
    console.log('更新');
  }
  componentWillUnmount() {
    console.log('卸载');
  }
}
export default Home