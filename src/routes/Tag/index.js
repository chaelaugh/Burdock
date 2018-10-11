import React, { PureComponent } from 'react';
import styles from './style/index.less';
import './iconfont.js';

export default class index extends PureComponent {
  state = {
    visible: true,
  };

  onClose = () => {
    const { onClose } = this.props
    onClose()
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible } = this.state;
    const { closable = false, color = '#575757', filling = false } = this.props;
    const colorStyle = {
      color: filling ? '#fff' : color,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: color === '#575757' ? '#d9d9d9' : color,
      backgroundColor: filling ? color : '#fafafa',
    };
    return (
      <span
        id='tag'
        className={styles.tag}
        style={{ display: visible ? 'inline-block' : 'none', ...colorStyle }}
      >
        <div>
            Tag 1
          {closable ? (
            <svg className={styles.icon} aria-hidden="true" onClick={this.onClose}>
              <use xlinkHref="#icon-guanbi" />
            </svg>
            ) : null}
        </div>
      </span>
    );
  }
}
