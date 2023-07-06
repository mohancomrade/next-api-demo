// pages/PostDetail/[id].js
import React from "react";
import { useRouter } from "next/router";

function PostDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Fetch the post detail using the `id` from the query parameter
  // and render the content

  return <div>Post Detail Page for ID: {id}</div>;
}

export default PostDetail;



