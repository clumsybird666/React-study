import React, { PureComponent } from 'react'
import { connect } from 'dva'
class IndexPage extends PureComponent {
  btnSetName = ()=>{
    // console.log(this.props);
    this.props.dispatch({
      type: 'indexTest/setName',
      data: {
        name:'swn'
      }
    })
  }
  btnSetNameAsync = ()=>{
    // console.log(this.props);
    this.props.dispatch({
      type: 'indexTest/setNameAsync',
      data: {
        name:'swn'
      }
    })
  }
  btnGetCnode=()=>{
    this.props.dispatch({
      type: 'indexTest/testCnode'
    })
  }
  render() {
    return (
      <div>
        首页{this.props.msg}
        <h3>{this.props.name}</h3>
        <button onClick={this.btnSetName}>改名字</button>
        <button onClick={this.btnSetNameAsync}>改名字Async</button>
        <button onClick={this.btnGetCnode}>数据</button>
        <ul>{
          this.props.list.map((item,index)=>{
            return <div key={item.id}>{item.content}</div>
          })
          }</ul>
      </div>
    )
  }
}
const mapStateToProps = state => {
  // console.log(state);
  return {
    msg: '申伟建',
    name: state.indexTest.name,
    list: state.indexTest.list
  }
}
export default connect(mapStateToProps)(IndexPage)
