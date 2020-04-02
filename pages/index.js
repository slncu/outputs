import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import dayjs from "dayjs";

import { Container, List, ListItem } from "@material-ui/core";
import { API } from "../constants";

const Home = props => {
  return (
    <div className="container">
      <Head>
        <title>長くもなく短くもない内容を収容する場所</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="sm">
        <List>
          {props.pages.map(page => {
            return (
              <ListItem key={page.id}>
                <Link href={`/posts/${encodeURIComponent(page.title)}`}>
                  <a>
                    <span>{dayjs.unix(page.created).format("YYYY/MM/DD")}</span>
                    <span>{page.title}</span>
                  </a>
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Container>
    </div>
  );
};

Home.getInitialProps = async ctx => {
  const res = await fetch(API.SB_PAGES, {
    mode: "cors"
  });

  return res.json();
};

export default Home;
