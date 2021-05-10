import React, { PureComponent } from 'react'
import 'antd/dist/antd.css'
import { Button } from 'antd';
import { DatePicker, Space } from 'antd';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        antd
        <Button type="primary">点击</Button>
        <Space direction="vertical">
    <DatePicker onChange={this.onChange} />
    <DatePicker onChange={this.onChange} picker="week" />
    <DatePicker onChange={this.onChange} picker="month" />
    <DatePicker onChange={this.onChange} picker="quarter" />
    <DatePicker onChange={this.onChange} picker="year" />
  </Space>,
      </div>
    )
  }
  onChange(date, dateString) {
    console.log(date, dateString);
  }
  
}
