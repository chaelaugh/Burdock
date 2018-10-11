import React, { PureComponent } from 'react';
import styles from './style/index.less';

export default class index extends PureComponent {
  state = {
    hover: false,
    clicked: false,
    type: 'default',
    color: '',
  };

  componentWillMount() {
    const { type = 'default', disabled } = this.props;
    if (!disabled) {
      const list = [
        { type: 'default', color: '#16a4ff' },
        { type: 'primary', color: '#fff' },
        { type: 'danger', color: '#fff' },
      ];
      let value = '';
      list.forEach(item => {
        if (item.type === type) {
          value = item.color;
        }
      });
      this.setState({
        type,
        color: value,
      });
    }
  }

  onMouseEnter = () => {
    this.setState({
      hover: true,
    });
  };

  onMouseLeave = () => {
    this.setState({
      hover: false,
    });
  };

  onClick = () => {
    this.setState({
      clicked: true,
    });
  };

  onBlur = () => {
    this.setState({
      clicked: false,
    });
  };

  render() {
    const { hover, clicked, type, color } = this.state;
    const { children, size = 'default', style = {}, disabled = false } = this.props;
    const sizeList = {
      small: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 7,
        paddingRight: 7,
        height: 24,
      },
      default: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 15,
        paddingRight: 15,
        height: 32,
      },
    };
    return (
      <button
        type="button"
        disabled
        className={disabled ? styles.disabled : styles[type]}
        onMouseEnter={disabled ? () => {} : this.onMouseEnter}
        onMouseLeave={disabled ? () => {} : this.onMouseLeave}
        onClick={disabled ? () => {} : this.onClick}
        onBlur={disabled ? () => {} : this.onBlur}
        style={
          hover || clicked
            ? { color, borderColor: color, ...sizeList[size], ...style }
            : { ...sizeList[size], ...style }
        }
      >
        {children}
      </button>
    );
  }
}
