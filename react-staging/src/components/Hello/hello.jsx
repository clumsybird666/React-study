import React,{ Component }  from 'react'
import axios from 'axios'
class Hello extends Component{
  getStudnetInfo = () => {
    axios({
      url: 'http://127.0.0.1:3000/api1/student'
    }).then(res=>{
      console.log(res);
    })
  }
  render(h) {
    return <button onClick={ this.getStudnetInfo }>获取学生数据</button>
  }
}
export default Hello

