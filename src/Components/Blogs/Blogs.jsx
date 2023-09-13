/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaBookmark } from "react-icons/fa";

const Blogs = ({ handleBookmarks }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="w-2/3">
      {blogs.map((blog) => (
        <div className="py-4 border-b border-gray-200 mb-5" key={blog.id}>
          <img className="mb-8" src={blog.cover} alt="" />
          <div className="flex justify-between items-center">
            <div className="flex gap-6">
              <img className="w-14" src={blog["author-img"]} alt="" />
              <div>
                <h4 className="text-2xl font-bold text-[#111]">
                  {blog.author}
                </h4>
                <p className="text-gray-400 text-sm font-medium">
                  {blog["posted-date"]}
                </p>
              </div>
            </div>
            <div>
              <p className="text-gray-400 font-semibold">
                {blog["reading-time"]}{" "}
                <button
                  onClick={() => handleBookmarks(blog.title)}
                  className="ml-2 text-gray-500"
                >
                  <FaBookmark />
                </button>
              </p>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-[#111] mt-5 mb-3">
            {blog.title}
          </h2>
          {blog.hashtags.map((hashtag) => (
            <a
              href={hashtag}
              className="mr-2 text-sm text-gray-400 font-semibold"
              key={blog.hashtags.indexOf(hashtag)}
            >
              {hashtag}
            </a>
          ))}
          <button className="block mt-2 font-semibold text-lg text-[#6047EC] underline">
            Mark as read
          </button>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
