import React, { PureComponent } from 'react';
import Table from '../Table';
import Header from '../Header';
import CheckboxTag from './index';

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
        description: '形如 \n[{ id: 1, label: \'少林足球\', value: \'num1\', checked: false }]',
        type: 'any[]',
        defaults: '',
      },
    ];

    const list = [
      { id: 1, label: '少林足球', value: 'num1', checked: false },
      { id: 2, label: '行运一条龙', value: 'num2', checked: false },
      { id: 3, label: '国产凌凌漆', value: 'num3', checked: false },
      { id: 4, label: '鹿鼎记', value: 'num4', checked: false },
    ];

    const list1 = [
      { id: 1, label: '少林足球', value: 'n2um1', checked: false },
      { id: 2, label: '行运一条龙', value: 'n2um2', checked: false },
      { id: 3, label: '国产凌凌漆', value: 'n2um3', checked: false },
      { id: 4, label: '鹿鼎记', value: 'nu2m4', checked: false },
    ];

    const list2 = [
      { id: 1, label: '少林足球', value: 'n2um13', checked: false },
      { id: 2, label: '行运一条龙', value: 'n2um23', checked: false },
      { id: 3, label: '国产凌凌漆', value: 'n2um33', checked: false },
      { id: 4, label: '鹿鼎记', value: 'nu2m43', checked: false },
    ];
    //
    return (
      <div>
        <Header>CheckboxTag 多选标签</Header>
        <CheckboxTag list={list} onChange={(e) => {console.log(e)}} />
        <CheckboxTag list={list1} selectAll />
        <CheckboxTag list={list2} checkedList={['n2um13', 'n2um33']} />
        <div>
          <Table columns={columns} data={data} rowKey="id" title="API" />
        </div>
      </div>
    );
  }
}
