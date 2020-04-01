import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import testPages from "../data/test-pages.json";
import { unixToLocaleDateString } from "../helpers/date";
import { API } from "../constants";

const Home = () => {
  useEffect(() => {
    // const request = async () => {
    // }
  }, []);

  console.log(testPages.pages);

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {testPages.pages.map(page => {
          return (
            <div key={page.id}>
              <Link
                href="/posts/[pid]"
                as={`/posts/${encodeURIComponent(page.title)}`}
              >
                <a>
                  <h2>{page.title}</h2>
                </a>
              </Link>
            </div>
          );
        })}
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Home;
