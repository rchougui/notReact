import { React } from "./lib/notReact";

const Component = () => {
  const [count, setCount] = React.useState(1);
  const [list, setList] = React.useState([]);
  const [text, setText] = React.useState<string>("This is not React !");
  React.useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/" + count)
      .then((x) => x.json())
      .then((x) => setList(x.message));
    console.log(list);
  }, [count]);

  return (
    <main>
      <div>
        Text: {text}
        <button onClick={() => setText("and yet it reacts !")}>
          Change text
        </button>
      </div>
      <div>
        Count: {count}
        <button onClick={() => setCount(count + 1)}>
          Increase count, trigger useEffect
        </button>
        <div style="display:flex; width:100vw; flex-wrap:wrap">
          {list.map((item) => (
            <img
              style="max-width:20%; max-height:200px;
               padding:1em; object-fit: cover;"
              src={item}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

const rootElement = document.getElementById("root");
React.render(<Component />, rootElement);
