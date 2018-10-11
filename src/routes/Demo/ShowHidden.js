import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { Tabs } from 'antd';
import Demo from './Demo';

const { TabPane } = Tabs;

@connect()
export default class ShowHidden extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <div style={{ padding: 20 }}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Tab 1" key="1">
              <Demo show />
              <Demo show />
              <Demo show />
              <Demo show />
              <Demo show />
              <Demo show />
              <Demo show />
              <Demo show />
              <Demo show />
              <Demo show />
              <Demo show />
              <Demo show />
              <Demo show />
              <Demo show />
              <Demo show />
              <Demo show />
              <Demo show />
              <Demo show />
              <Demo show />
              <Demo show />
              <Demo show />
              <Demo show />
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              <Demo />
            </TabPane>
          </Tabs>
        </div>
      </Fragment>
    );
  }
}
