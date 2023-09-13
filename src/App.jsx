import "./App.css";
import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";

function App() {
  return (
    <>
      <Header></Header>
      <main className="max-w-7xl mx-auto p-4">
        <Blogs></Blogs>
      </main>
    </>
  );
}

export default App;
