import React, { Component } from 'react';
import styles from './style/index.less';



export default class Group extends Component {
  state = {};

  render() {
    const { children } = this.props
    console.log(children)
    return (
      <div>
        {children}
      </div>
    );
  }
}
