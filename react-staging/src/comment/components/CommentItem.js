import React, { PureComponent } from 'react'
import { Comment, Avatar } from 'antd';
export default class CommentItem extends PureComponent {

  render() {
    const { avatar,nickName,content,dateTime } = this.props.commentList
    return (
      <div>
        <Comment
        author = {<a>{nickName}</a>}
        avatar={<Avatar src={avatar}/>}
        content={<p>{content}</p>}
        datetime={<span>{dateTime}</span>}/>
      </div>
    )
  }
}
