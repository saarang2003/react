const tasks = [
  { id: 101, title: "Setup project" },
  { id: 102, title: "Learn JSX" },
  { id: 103, title: "Understand Props" },
  { id: 104, title: "Render Lists" },
];

function App() {
  const taskList = tasks.map((task) => <li key={task.id}>{task.title}</li>);

  return (
    <>
      <ul>{taskList}</ul>
    </>
  );
}

export default App;
