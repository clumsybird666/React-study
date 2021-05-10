import React, { PureComponent } from 'react'
import  CommentInput from './components/CommentInput'
import  CommentItem  from './components/CommentItem'
export default class App extends PureComponent {
  constructor(props){
    super()
    this.state = {
      commentList: []
    }
  }
  render() {
    return (
      <div style={{width:"500px"}}>
        <CommentItem commentList={this.state.commentList} ></CommentItem>
        <CommentInput submitComment={this.submitComment.bind(this)}/>
      </div>
    )
  }
  submitComment(info){
    this.setState({
      commentList:info
    })
    console.log(info);
  }
}
