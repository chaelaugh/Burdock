import React, { PureComponent } from 'react';
import Button from './index';
import Table from '../Table';

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
        type: 'string',
        defaults: 'false',
      },
      {
        id: 3,
        props: 'onClick',
        description: 'click 事件的 handler',
        type: 'boolean',
        defaults: '-',
      },
    ];
    return (
      <div style={{ minHeight: 500, padding: '1em' }}>
        <Button>click this</Button>
        <Button type="primary" style={{ marginLeft: '1em' }}>
          click this
        </Button>
        <Button type="danger" style={{ marginLeft: '1em' }}>
          click this
        </Button>
        <Button type="danger" style={{ marginLeft: '1em' }} disabled>
          click this
        </Button>
        <div>
          <Table columns={columns} data={data} rowKey="id" title="API" />
        </div>
      </div>
    );
  }
}
