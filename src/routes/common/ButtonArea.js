import React from 'react';

const ButtonArea = ({ children }) => {
  const style = {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: 12,
    paddingBottom: 12,
  };
  return <div style={style}>{children}</div>;
};

export default ButtonArea;
