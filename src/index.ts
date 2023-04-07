import { React } from "./notReact";
const Component = () => {
  const [count, setCount] = React.useState(1);
  const [text, setText] = React.useState<string>("This is not React !");
  return {
    render: () => console.log({ count, text }),
    click: () => setCount(count + 1),
    type: (newText: string) => setText(newText),
  };
};
let App = React.render(Component);
App.click();
App = React.render(Component);
App.type("hello");
App = React.render(Component);
App.click();
App = React.render(Component);
App.click();
