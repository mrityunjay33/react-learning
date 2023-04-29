import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Counter';

const Body = (props) => {
    console.log(props);
    console.log(props.children.props.children);
    const element = React.createElement(props.children.type, props.children.props);
  return (
    <>
    <>
    <div>Body</div>
    {element}
    <Counter />
    </>
    </>
  )
}

export default Body