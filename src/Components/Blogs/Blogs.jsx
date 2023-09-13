import { useEffect, useState } from "react";
import { FaBookmark } from "react-icons/fa";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <h1>Blog: {blogs.length}</h1>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <img src={blog.cover} alt="" />
          <div className="flex">
            <div className="flex justify-between">
              <img src={blog["author-img"]} alt="" />
              <div>
                <h4>{blog.author}</h4>
                <p>{blog["posted-date"]}</p>
              </div>
            </div>
            <div>
              <p>
                {blog["reading-time"]}{" "}
                <button>
                  <FaBookmark />
                </button>
              </p>
            </div>
          </div>
          <h2>{blog.title}</h2>
          {blog.hashtags.map((hashtag) => (
            <a
              href={hashtag}
              className="mr-3"
              key={blog.hashtags.indexOf(hashtag)}
            >
              {hashtag}
            </a>
          ))}
          <button className="block">Mark as read</button>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
