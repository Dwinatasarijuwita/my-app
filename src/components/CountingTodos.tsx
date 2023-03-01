interface Props {
  dataCount: number;
}

const CountingTodos = ({ dataCount }: Props) => {
  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    console.log(dataCount);
    return dataCount;
  }
  return (
    <section>
      <a onClick={handleSubmit}>count</a>
    </section>
  );
};

export default CountingTodos;
