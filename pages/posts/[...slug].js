import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { API } from "../../constants";
import testPage from "../../data/test-page.json";

const Post = () => {
  const router = useRouter();
  const slug = router.query.slug || [];
  const [slugs, setSlugs] = useState({
    date: "",
    page: ""
  });

  useEffect(() => {
    const request = async () => {
      const res = await fetch(
        `${API.SB_PAGES}/${encodeURIComponent(slug[3])}`,
        {
          mode: "cors"
        }
      );
      console.log(res.json());
    };

    request();
  }, []);

  console.log({ slug });

  return (
    <>
      <h1>Slug: {slug.join("/")}</h1>
    </>
  );
};

export default Post;
