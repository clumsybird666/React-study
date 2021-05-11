import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'dva/router'
class Child extends PureComponent {
  navToIndex(){
    console.log(this.props);
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <button onClick={this.navToIndex.bind(this)}>首页</button>
      </div>
    );
  }
}

Child.propTypes = {

};

export default withRouter(Child);