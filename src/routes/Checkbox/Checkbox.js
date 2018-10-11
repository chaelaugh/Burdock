import React, { PureComponent } from 'react';
import Table from '../Table';
import Header from '../Header';
import Checkbox from './index';

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
        props: 'type',
        description: '按钮的类型，default，primary，danger',
        type: 'string',
        defaults: 'default',
      },
      {
        id: 2,
        props: 'size',
        description: '按钮的大小，small，default',
        type: 'string',
        defaults: 'default',
      },
      {
        id: 4,
        props: 'disabled',
        description: '是否禁用按钮',
        type: 'boolean',
        defaults: 'false',
      },
      {
        id: 3,
        props: 'onClick',
        description: 'click 事件的 handler',
        type: 'function',
        defaults: '-',
      },
    ];
    return (
      <div>
        {/*<Header>Checkbox 多选框</Header>*/}
        <Checkbox onChange={(e) => console.log(e)} />
        <div>
          <Table columns={columns} data={data} rowKey="id" title="API" />
        </div>
      </div>
    );
  }
}
