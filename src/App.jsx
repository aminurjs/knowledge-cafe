import "./App.css";
import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";
import { useState } from "react";
import Bookmarks from "./Components/Bookmarks/Bookmarks";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleBookmarks = (title) => {
    const newTitle = [...bookmarks, title];
    setBookmarks(newTitle);
    console.log(title, bookmarks);
  };
  return (
    <>
      <Header></Header>
      <main className="max-w-7xl mx-auto p-4">
        <div className="flex gap-6">
          <Blogs handleBookmarks={handleBookmarks}></Blogs>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </main>
    </>
  );
}

export default App;
