import { React } from "./lib/notReact";

const Component = () => {
  const [count, setCount] = React.useState(1);
  const [text, setText] = React.useState<string>("This is not React !");
  React.useEffect(() => {
    console.log("useEffect in effect !");
  }, [text]);
  return (
    <>
      test
      {count}
      <button onClick={() => setCount(count + 1)}></button>
    </>
  );
};

const rootElement = document.getElementById("root");
React.render(<Component />, rootElement);

console.log("test");
