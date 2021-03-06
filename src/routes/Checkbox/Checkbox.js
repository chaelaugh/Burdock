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
        props: 'onChange',
        description: '变化时回调函数',
        type: 'function',
        defaults: '-',
      },
      {
        id: 2,
        props: 'defaultChecked',
        description: '初始默认选中与否',
        type: 'boolean',
        defaults: 'false',
      },
      {
        id: 3,
        props: 'disabled',
        description: '是否禁用checkbox',
        type: 'boolean',
        defaults: 'false',
      },
      {
        id: 4,
        props: 'checked',
        description: '当前是否被选中',
        type: 'boolean',
        defaults: 'false',
      },
    ];
    return (
      <div>
        <Header>Checkbox 多选框</Header>
        <Checkbox onChange={(e) => console.log(e)} />
        <Checkbox defaultChecked onChange={(e) => console.log(e)} />
        <Checkbox checked onChange={(e) => console.log(e)} />
        <Checkbox checked={false} onChange={(e) => console.log(e)} />
        <Checkbox checked onChange={(e) => console.log(e)} disabled />
        <Checkbox checked={false} onChange={(e) => console.log(e)} disabled />
        <div>
          <Table columns={columns} data={data} rowKey="id" title="API" />
        </div>
      </div>
    );
  }
}
