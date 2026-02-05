import Header from "./component/Header";

const CONTENT = "React Fundamentals Training";
const HEADING_TEXT = "Welcome To React";

function App() {
  return (
    <div>
      <h1>{HEADING_TEXT}</h1>
      <Header msg={CONTENT} />
    </div>
  );
}
export default App;
