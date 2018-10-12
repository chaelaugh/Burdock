import React from 'react'
import { Provider } from './context';
import Header from './header';
import Title from './title'


export default class App extends React.Component {
  onChange = () => {
    console.log('到吃饭时间啦')
  }

  render() {
    const context = { title: '欢快的雏龙', onChange: this.onChange };
    return (
      <Provider value={context}>
        <Header>
          <Title />
        </Header>
      </Provider>
    );
  }
};
