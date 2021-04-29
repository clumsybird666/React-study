import React,{ Component } from 'react'
import Home from './components/Home/home'
import About from './components/About/about'
import { Link, Route } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <div id="root">
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}
                <Link className="list-group-item active" to="/about">about</Link>
                <Link className="list-group-item" to="/home">home</Link>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}