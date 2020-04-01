import React, { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import { API } from "../../constants";
import testPage from "../../data/test-page.json";
import { unixToLocaleDateString } from "../../helpers/date";

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
  console.log(pid);
  const res = await fetch(
    `${API.SB_PAGES}/${encodeURIComponent(ctx.query.pid)}`,
    {
      mode: "cors"
    }
  );

  return res.json();
};

export default Post;
