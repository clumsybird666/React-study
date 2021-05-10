import React, { PureComponent } from 'react'
import { Input,Button } from 'antd'
import moment from 'moment'
export default class CommentInput extends PureComponent {
  constructor(props){
    super()
    this.state = {
      conent:""
    }
  }
  render() {
    return (
      <div>
        <Input.TextArea 
          value={this.state.conent}
          onChange = {e=> this.changeText(e)}/>
        <Button onClick={e=>this.addCommentItem()} type="primary">添加评论</Button>
      </div>
    )
  }
  addCommentItem(){
    const commentInfo = {
      id: moment().valueOf(),
      avatar:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      nickName: 'swj',
      content: '这是评论内容',
      dateTime: moment().format('YYYY-MM-DD')
    }
    this.props.submitComment(commentInfo)
  }
  changeText(e){
    this.setState({
      conent: e.target.value
    })
    console.log(e.target.value);
  }
}
