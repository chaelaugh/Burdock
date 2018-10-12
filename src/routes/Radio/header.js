import React, { PureComponent } from 'react';

export default class index extends PureComponent {
  render() {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    );
  }
}
