import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import dayjs from "dayjs";
import styled from "styled-components";

import { Container, ListItem } from "@material-ui/core";
import { API } from "../constants";
import VisibilityIcon from "@material-ui/icons/Visibility";

const Home = props => {
  return (
    <div className="container">
      <Head>
        <title>{process.env.BLOG_TITLE || `${props.projectName} blog`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="sm">
        <H1>{process.env.BLOG_TITLE || `${props.projectName} blog`}</H1>
        <List>
          {props.pages.map(page => {
            return (
              <Item key={page.id}>
                <ListItem>
                  <Link href={`/posts/${encodeURIComponent(page.title)}`}>
                    <a>
                      <span>{page.title}</span>
                    </a>
                  </Link>
                </ListItem>
                <Info>
                  <span>{dayjs.unix(page.created).format("YYYY/MM/DD")}</span>
                  <Viewer>
                    <VisibilityIcon />
                    {page.views}
                  </Viewer>
                </Info>
              </Item>
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

const H1 = styled.h1`
  color: #${process.env.THEME_COLOR};
`;

const List = styled.div`
  margin: 80px 0;
`;

const Item = styled.div`
  font-size: 18px;
  & + & {
    padding-top: 12px;
    margin-top: 12px;
  }

  a {
    text-decoration: none;
  }
`;

const Viewer = styled.div`
  display: flex;
  align-items: flex-end;
  > svg {
    margin: 0 4px 0 8px;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  color: #778899;
  font-size: 14px;
`;

export default Home;
