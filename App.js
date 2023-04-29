import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './Body';

const App = () => {

  const colors = ['red', 'green', 'blue'];
  const colorString = colors.join("# ");
  console.log(colorString); // Output: "red,green,blue"
  

  return (
    <>
    <div id="test">
    <React.Fragment >
    <h1>How Are you ?</h1>
    <Body>
      <div>Test inside Body</div>
       </Body>
    </React.Fragment>
    </div>
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);