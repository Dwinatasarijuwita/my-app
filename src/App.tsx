import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TableToDo from "./components/TableToDo";
import { Todo } from "./schemas/todo";

function App() {
  const [data, setData] = useState<Todo[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!res.ok) {
          throw new Error("notOk");
        }
        const responseJson = await res.json();
        setData(responseJson);
        console.log(responseJson);
        console.log(responseJson.length);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <div className="App">
      <h1 className="text-3xl">Hello world</h1>
      <TableToDo data={data} />
    </div>
  );
}

export default App;
