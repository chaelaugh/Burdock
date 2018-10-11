import React, { PureComponent } from 'react';
import styles from './style/index.less';

export default class Table extends PureComponent {
  state = {};

  render() {
    const {
      size = 'default',
      bordered = false,
      title = '',
      footer = '',
      columns = [],
      data = [],
      rowKey = '',
    } = this.props;

    const sizeList = {
      small: {
        padding: 8,
      },
      default: {
        padding: 16,
      },
    };

    const borderLeft = bordered
      ? {
          borderLeftWidth: 1,
          borderLeftStyle: 'solid',
          borderLeftColor: '#e8e8e8',
        }
      : {};
    const borderTopRight = bordered
      ? {
          borderTopWidth: 1,
          borderTopStyle: 'solid',
          borderTopColor: '#e8e8e8',
          borderRightWidth: 1,
          borderRightStyle: 'solid',
          borderRightColor: '#e8e8e8',
        }
      : {};
    const borderBottom = bordered
      ? {
          borderLeftWidth: 1,
          borderLeftStyle: 'solid',
          borderLeftColor: '#e8e8e8',
          borderBottomWidth: 1,
          borderBottomStyle: 'solid',
          borderBottomColor: '#e8e8e8',
        }
      : {};

    return (
      <div style={{ padding: 20 }}>
        <table style={{ marginTop: 30, width: '100%', ...borderTopRight }}>
          <tbody>
            {title ? (
              <tr>
                <th className={styles.title} style={{ ...borderBottom }}>
                  {title}
                </th>
              </tr>
            ) : null}
            <tr className={styles.tableHead}>
              {columns.map(item => {
                return (
                  <th
                    key={item.key}
                    className={styles.tableHeadItem}
                    style={{ ...sizeList[size], ...borderLeft }}
                  >
                    {item.title}
                  </th>
                );
              })}
            </tr>
            {data.map(item => {
              return (
                <tr className={styles.row} key={item[rowKey]}>
                  {columns.map(item1 => {
                    return (
                      <td
                        key={item1.key}
                        className={styles.col}
                        style={{ ...sizeList[size], ...borderLeft }}
                      >
                        {item1.render ? item1.render(item[item1.dataIndex]) : item[item1.dataIndex]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
            {footer ? (
              <tr>
                <th className={styles.footer} style={{ ...borderBottom }}>
                  <div>{footer}</div>
                </th>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    );
  }
}
