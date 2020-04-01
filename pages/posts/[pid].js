import React from "react";
import fetch from "isomorphic-unfetch";
import { API } from "../../constants";

const Post = props => {
  console.log(props);

  return (
    <>
      <h1>{props.title}</h1>
      <div>日付: {props.created}</div>
    </>
  );
};

Post.getInitialProps = async ctx => {
  const pid = ctx.query.pid;
  const res = await fetch(
    `${API.SB_PAGES}/${encodeURIComponent(ctx.query.pid)}`,
    {
      mode: "cors"
    }
  );

  return res.json();
};

export default Post;
