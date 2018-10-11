import React, { PureComponent } from 'react';
import Table from '../Table';
import Header from '../Header';
import Tag from './index';

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
        props: 'closable',
        description: '标签是否可关闭',
        type: 'boolean',
        defaults: 'false',
      },
      {
        id: 2,
        props: 'color',
        description: '标签颜色',
        type: 'string',
        defaults: '#575757',
      },
      {
        id: 3,
        props: 'filling',
        description: '是否填充标签',
        type: 'boolean',
        defaults: 'false',
      },
      {
        id: 4,
        props: 'onClose',
        description: '关闭的回调',
        type: 'function',
        defaults: '-',
      },
    ];
    return (
      <div>
        <Header>Tag 标签</Header>
        <Tag />
        <Tag color='#f50' />
        <Tag closable />
        <Tag color='#108ee9' closable filling onClose={() => console.log('关闭')} />
        <div>
          <Table columns={columns} data={data} rowKey="id" title="API" />
        </div>
      </div>
    );
  }
}
