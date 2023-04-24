const heading = React.createElement(
  "h1",
  { id: "hello", xyz: "abc" },
  "This is heading from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);