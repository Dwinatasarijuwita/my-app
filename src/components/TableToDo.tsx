import { Todo } from "../schemas/todo";
import CountingTodos from "./CountingTodos";

interface Props {
  data: Todo[];
}
const TableToDo = ({ data }: Props) => {
  console.log(data.length, "ini masuk");
  return (
    <section>
      <CountingTodos dataCount={data.length} />
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>userId</th>
            <th>completed</th>
          </tr>
        </thead>

        <tbody>
          {data.map((el, index) => {
            return (
              <tr key={index}>
                <td>{el.id}</td>
                <td>{el.title}</td>
                <td>{el.userId}</td>

                <td>{el.completed === true ? "completed" : "incompleted"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default TableToDo;
