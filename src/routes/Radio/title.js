import React from 'react';
import { Consumer } from './context';

function Title() {
  return (
    <Consumer>
      {({ title, onChange }) => (
        <button type="button" onClick={onChange}>
          {title}
        </button>
      )}
    </Consumer>
  );
}

export default Title;
