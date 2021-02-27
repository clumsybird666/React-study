const express = require('express')
const app = express()
const port = 3001

app.use((req,res,next)=>{
  console.log('访问服务器成功')
  next()
})

app.get('/student', (req, res) => {
  const students = [
    {
      stuId:1,
      stuName: '猿小申'
    },
    {
      stuId:2,
      stuName: 'yaunxiaoshen'
    }
  ]
  res.send(students)
})

app.listen(port, () => console.log(`Example app listening on port port!`))