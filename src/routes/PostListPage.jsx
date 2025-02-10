import React from "react";
import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";

const PostListPage = () => {
  return (
    <div className="">
      <h className="mb-8 text-2xl">Development Blog</h>
      <div className="flex gap-8">
        <div className="">
          <PostList />
        </div>
        <div className="">
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
