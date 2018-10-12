import React, { PureComponent } from 'react';
import Table from '../Table';
import Header from '../Header';
import Radio from './index';
import RadioGroup from './Group';

export default class index extends PureComponent {
  render() {
    const columns = [
      {
        title: 'Props',
        dataIndex: 'props',
        key: 'props',
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        render: text => <span style={{ color: '#d5007e' }}>{text}</span>,
      },
      {
        title: 'Defaults',
        dataIndex: 'defaults',
        key: 'defaults',
      },
    ];

    const data = [
      {
        id: 1,
        props: 'onChange',
        description: '变化时回调函数，返回选中的value',
        type: 'function',
        defaults: '-',
      },
      {
        id: 2,
        props: 'selectAll',
        description: '全选',
        type: 'boolean',
        defaults: 'false',
      },
      {
        id: 3,
        props: 'checkedList',
        description: '初始选中的value',
        type: 'boolean',
        defaults: 'false',
      },
      {
        id: 4,
        props: 'list',
        description: '形如 [{ id: 1, label: \'少林足球\', value: \'num1\', checked: false }]',
        type: 'any[]',
        defaults: '',
      },
    ];

    return (
      <div>
        {/* <Header>Radio 单选框</Header> */}
        <Radio />
        <div>
          <Table columns={columns} data={data} rowKey="id" title="API" />
        </div>
      </div>
    );
  }
}
