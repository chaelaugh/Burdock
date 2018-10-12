import React, { Component } from 'react';
import styles from './style/index.less';

export default class index extends Component {
  state = {
    list: [],
  };

  componentWillMount() {
    const { selectAll = false, checkedList = [], list = [] } = this.props
    if (selectAll) {
      list.forEach((item) => {
          item.checked = true // eslint-disable-line
      })
    }
    !selectAll && checkedList.forEach((item) => { // eslint-disable-line
      list.forEach((item1) => {
        if (item === item1.value) {
          item1.checked = true // eslint-disable-line
        }
      })
    })
    this.setState({
      list,
    });
  }

  onChange = value => {
    const { list } = this.state;
    const { onChange } = this.props
    list.forEach(item => {
      item.checked = value === item.value ? !item.checked : item.checked;
    });
    this.setState({
      list,
    })
    const checkedList = []
    list.forEach((item) => {
      if (item.checked) {
        checkedList.push(item.value)
      }
    })
    onChange(checkedList)
  };

  render() {
    const { list } = this.state;
    return (
      <div>
        {list.map(item => (
          <span
            key={item.id}
            className={styles[item.checked ? 'checked' : 'checkboxTag']}
            onClick={() => this.onChange(item.value)}
          >
            {item.label}
          </span>
        ))}
      </div>
    );
  }
}
