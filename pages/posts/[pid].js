import React from "react";
import styled from "styled-components";
import fetch from "isomorphic-unfetch";
import dayjs from "dayjs";
import { Container } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

import { parse, indent } from "../../helpers/scrapbox";
import { API } from "../../constants";

const Post = props => {
  return (
    <Container maxWidth="sm">
      <Header>
        <Icon src={props.user.photo} />
        <H1>{props.title}</H1>
      </Header>
      <Date>
        <AccessTimeIcon />
        <time>{dayjs.unix(props.created).format("YYYY/MM/DD")}</time>
      </Date>
      <Contents>
        {props.lines.map(line => (
          <Line
            indent={indent(line.text)}
            key={line.id}
            dangerouslySetInnerHTML={{ __html: parse(line.text) }}
          />
        ))}
      </Contents>
    </Container>
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

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  margin-right: 2%;
`;

const H1 = styled.h1``;

const Date = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  > time {
    margin-left: 1%;
  }
`;

const Line = styled.div`
  margin-left: ${props => props.indent * 16}px;
`;

const Contents = styled.section`
  margin: 80px 0;
  .h2 {
    padding: 12px 0;
    margin: 1em 0;
    border-bottom: 1px solid #32cd32;
  }

  .indent {
    display: block;
    padding-left: 16px;
    position: relative;
    margin: 4px 0;

    &::before {
      content: "●";
      position: absolute;
      display: inline-block;
      color: #32cd32;
      margin-right: 4px;
      font-size: 10px;
      line-height: 16px;
      vertical-align: text-top;
      left: 0;
      top: 4px;
    }
  }

  code {
    display: inline-block;
    padding: 4px;
    border-radius: 2px;
    color: #3cb371;
    background: #f5fffa;
  }

  img {
    width: 100%;
  }
`;

export default Post;
