import React, { PureComponent } from 'react';
import styles from './style/index.less';
import './iconfont.js';

export default class index extends PureComponent {
  state = {
    checked: false,
  };

  componentWillReceiveProps(nextProps) {
    const { checked, defaultChecked = false } = nextProps;
    if (typeof checked !== 'undefined') {
      this.setState({
        checked,
      });
    } else {
      this.setState({
        checked: defaultChecked,
      });
    }
  }

  onClick = () => {
    const { checked } = this.state;
    const { onChange } = this.props;
    if (typeof this.props.checked !== 'undefined') { // eslint-disable-line
      return;
    }
    onChange(!checked);
    this.setState({
      checked: !checked,
    });
  };

  render() {
    const { checked } = this.state;
    const { disabled = false } = this.props;
    const color = disabled ? '#d9d9d9' : checked ? '#0086ff' : '#d9d9d9';
    const url = `#icon-${checked ? 'checkbox' : 'checkboxoutlineblank'}`;
    return (
      <span
        onClick={disabled ? () => {} : this.onClick}
        className={styles[disabled ? 'disabled' : 'checkbox']}
      >
        <svg className={styles.icon} aria-hidden="true" style={{ fontSize: '1.4em', color }}>
          <use xlinkHref={url} />
        </svg>
        <span className={styles.value}>click this</span>
      </span>
    );
  }
}
