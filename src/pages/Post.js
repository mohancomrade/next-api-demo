// Post.js
import React from "react";
import Link from "next/link";

function Post({ post }) {
  return (
    <section>
      <Link href={`/PostDetail/${post.id}`}>
        <div className="pb-10">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
            <Link href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {post.title}
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              {post.body}
            </p>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default Post;




