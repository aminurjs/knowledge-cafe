import PropTypes from "prop-types";

const Bookmarks = ({ bookmarks, read }) => {
  return (
    <div className="w-1/3">
      <div className=" mb-4 bg-[#6047EC1A] rounded-lg px-8 py-5 border border-[#6047EC]">
        <h2 className="text-xl font-bold text-[#6047EC]">
          Spent time on read : {read} min
        </h2>
      </div>
      <div className="p-8 bg-[#1111110D] mt-5 min-h-screen rounded-lg">
        <h2 className="text-xl font-bold text-[#111] mb-4">
          Bookmarked Blogs : {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark, idx) => (
          <div className="bg-white p-5 mb-4 rounded-lg" key={idx}>
            <h3 className="text-lg font-semibold text-[#111]">{bookmark}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  read: PropTypes.number,
};
export default Bookmarks;
