import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';

@connect()
export default class ShowHidden extends Component {
  state = {};

  render() {
    const { show = false } = this.props;

    return (
      <Fragment>
        <div style={{ padding: 20 }}>
          <div style={{ padding: 20, backgroundColor: '#FFB6C1' }}>
            <Link to="/bidManagement/bidList">1</Link>
          </div>
          <div style={{ padding: 20, backgroundColor: '#87CEFA' }}>2</div>
          {show ? <div style={{ padding: 20, backgroundColor: '#FFFFF0' }}>3</div> : null}
        </div>
      </Fragment>
    );
  }
}
