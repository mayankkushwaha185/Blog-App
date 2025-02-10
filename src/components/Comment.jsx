import React from "react";
import Image from "./Image";

const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-centers gap-4">
        <Image
          src="userImg.jpeg"
          className="w-10 h-10 rounded-ful object-cover"
          w="40"
        />
        <span className="font-medium">John Doe</span>
        <span className="text-sm text-gray-500">2 Days Ago</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          nostrum voluptatum est aliquam molestias eum distinctio odio rerum!
          Maiores corrupti iste explicabo distinctio quaerat. Libero, temporibus
          placeat. Ducimus repellat similique totam rem voluptas nisi quos
          eligendi neque ullam quibusdam, omnis necessitatibus sed quam amet
          itaque, sapiente quo eum. Eos, possimus.
        </p>
      </div>
    </div>
  );
};

export default Comment;
