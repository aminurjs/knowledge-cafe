import "./App.css";
import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";
import { useState } from "react";
import Bookmarks from "./Components/Bookmarks/Bookmarks";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [added, setAdded] = useState(false);
  const handleBookmarks = (title) => {
    const findT = bookmarks.find((findTitle) => findTitle === title);
    if (findT) {
      const bookmarkAdded = bookmarks.filter((bookmark) => bookmark !== title);
      setBookmarks(bookmarkAdded);
      setAdded(false);
      return;
    }
    setAdded(true);
    const newTitle = [...bookmarks, title];
    setBookmarks(newTitle);
  };
  const [read, setRead] = useState(0);
  const handleRead = (time) => {
    //const handleRead = (time, title) =>
    const newTime = read + time;
    setRead(newTime);
    // const readOk = bookmarks.filter((bookmark) => bookmark !== title);
    // setBookmarks(readOk);
  };
  return (
    <>
      <Header></Header>
      <main className="max-w-7xl mx-auto p-4">
        <div className="flex gap-6">
          <Blogs
            handleBookmarks={handleBookmarks}
            handleRead={handleRead}
            added={added}
          ></Blogs>
          <Bookmarks bookmarks={bookmarks} read={read}></Bookmarks>
        </div>
      </main>
    </>
  );
}

export default App;
