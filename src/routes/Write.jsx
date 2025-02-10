// import { useUser } from "@clerk/clerk-react";
import React from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill-new";

const Write = () => {
  // const { isLoaded, isSignedIn } = useUser();
  // if (!isLoaded) {
  //   return <div>Loading</div>;
  // }
  // if (isLoaded && isSignedIn) {
  //   return <div> You should Login!</div>;
  // }
  return (
    <div className="md:h-[calc(100vh-88px)] h-[calc(100vh-64px)] flex flex-col gap-6">
      <h1 className="text-xl font-light">Create a New Post</h1>
      <form className="flex flex-col gap-6  flex-1 mb-2">
        <button className="p-2 shadow-md rounded-xl w-max text-sm text-gray-500 bg-white ">
          Add a cover image
        </button>
        <input
          className="text-4xl font-semibold bg-transparent outline-none"
          type="text"
          placeholder="My Awesome Story"
        />
        <div className="flex items-center gap-3 ">
          <label htmlFor="" className="text-sm ">
            Chosse a category:
          </label>
          <select
            name="cat"
            id=""
            className="p-2 rounded-xl bg-white shadow-md border-none"
          >
            <option value="general">General</option>
            <option value="web-design">web-design</option>
            <option value="development">development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          className="p-2 rounded-xl bg-white shadow-md border-none"
          name="desc"
          placeholder="A short Descrption"
        />
        <ReactQuill
          theme="snow"
          className="flex-1 rounded-xl bg-white shadow-md border-none"
        />
        <button className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36">
          {" "}
          Send
        </button>
      </form>
    </div>
  );
};

export default Write;
