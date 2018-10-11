import React, { PureComponent } from 'react';
import styles from './style/index.less';

export default class index extends PureComponent {
  state = {};

  render() {
    const list = [
      { id: 1, label: '少林足球', value: 'num1' },
      { id: 2, label: '行运一条龙', value: 'num2' },
      { id: 3, label: '国产凌凌漆', value: 'num3' },
      { id: 4, label: '鹿鼎记', value: 'num4' },
    ];
    return (
      <div>
        {list.map(item => (
          <span key={item.id} className={styles.checkboxTag}>{item.label}</span>
        ))}
      </div>
    );
  }
}
