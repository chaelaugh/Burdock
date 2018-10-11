import React, { PureComponent } from 'react';
import styles from './style/index.less';

export default class index extends PureComponent {
  render() {
    const { children } = this.props
    return (
      <div className={styles.header}>
        {children}
      </div>
    );
  }
}
