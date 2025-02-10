import React from "react";

const PostMenuAction = () => {
  return (
    <div>
      <h1 className=" mb-4 text-sm font-medium mt-8">Actions</h1>
      <div className="flax items-center gap-2 py-2 text-sm cursor-pointer">
        <svg
          viewBox="0 0 48 48"
          width="20px"
          height="20px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4C10.3 4 9 5.3 9 7v34l15-9 15 9V7c0-1.7-1.3-3-3-3H12z"
            fill="black"
            stroke="black"
            strokeWidth="2"
          />
        </svg>

        <span>Save This Post</span>
      </div>
      <div className="flax items-center gap-2 py-2 text-sm cursor-pointer">
        <svg
          viewBox="0 0 48 48"
          width="20px"
          height="20px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 15V39a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V15M6 15h36M19 6h10a2 2 0 0 1 2 2v3H17V8a2 2 0 0 1 2-2z"
            fill="none"
            stroke="black"
            strokeWidth="3"
            // stroke-linecap="round"
            // stroke-linejoin="round"
          />
        </svg>

        <span>Delete This Post</span>
      </div>
    </div>
  );
};

export default PostMenuAction;
